const OpenAI = require("openai");
const dbService = require("./db.service");
const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const fs = require("fs");
const util = require("util");
const { drawChart } = require("./chart.service");
const { saveChat,getChats} = require("./chat.service");
const tipranksService = require("../services/tiprank.service");
const readFileAsync = util.promisify(fs.readFile);
const filePath = __dirname + "/../prompts/ddl_prompt.txt";

exports.getGPTResponse = async (prompt) => {
  try {
    const prePrompt = await readFileAsync(filePath, "utf8");

    const completion = await openAI.chat.completions.create({
      messages: [{ role: "user", content: prePrompt + prompt }],
      model: "gpt-3.5-turbo",
    });
    if (completion?.choices[0]?.message?.content != null) {
      console.log(completion?.choices[0]?.message?.content);
      const query = completion?.choices[0]?.message?.content

      if (query != null) {
        let queryResult;
        let resultStocks;
        let detail='';
          let detailAnswer;
          let askPrompt;
        try{
           queryResult = await runQuery(query);
           resultStocks = queryResult[0];

        }catch(error){

        }
        if (resultStocks?.length == 1) {
          const stock = resultStocks[0]["ticker"]?.toLowerCase();
          if (stock){
            detail = await tipranksService.getStockDetail(stock);
            askPrompt=`this is stock comapmny symbol ${stock} give me essential detail for investor about this company`
          }
        } else if (resultStocks?.length >1) {
          const filename = await getGPTChart(JSON.stringify(resultStocks[0]));
          detail = {
            filename: filename,
          };
          askPrompt=`this is stock data of different companies ${JSON.stringify(resultStocks)} give me essential detail for investor about this data`
        }else{
          askPrompt=prompt;

        }
        detailAnswer = await openAI.chat.completions.create({
          messages: [{ role: "user", content:  askPrompt }],
          model: "gpt-3.5-turbo",
        });
        return { data: resultStocks, detail: detail,content: detailAnswer?.choices[0]?.message?.content};
      } else {
        throw Error("null query");
      }
    } else {
      throw Error("null GPT");
    }
  } catch (error) {
    console.log(error);
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      throw Error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      throw error;
    }
  }
};
exports.ask = async (userId,prompt) => {
  try {
    const prePrompt = await readFileAsync(filePath, "utf8");
    const chats=await getChats(userId);
    const conversation = chats.map((entry) => `${entry.role}: ${entry.message}`).join('\n');
    const finalPrompt = `${conversation}\nUser: ${prompt}`;
    await saveChat(userId,"user",prompt);
    const completion = await openAI.chat.completions.create({
      messages: [{ role: "user", content:   finalPrompt }],
      model: "gpt-3.5-turbo",
    });
    const result=completion?.choices[0]?.message?.content;
    if (result != null) {
      await saveChat(userId,"assistant",result);
      return result;
    } else {
      throw Error("null GPT");
    }
  } catch (error) {
    console.log(error);
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      throw Error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      throw error;
    }
  }
};

const getGPTChart = async (prompt) => {
  try {
    const filePath = __dirname + "/../prompts/chart_prompt.txt";
    const prePrompt = await readFileAsync(filePath, "utf8");
    const completion = await openAI.chat.completions.create({
      messages: [{ role: "user", content: prePrompt + prompt }],
      model: "gpt-3.5-turbo",
    });
    const pythonCode = extractBetweenBackticksPython(
      completion.choices[0].message.content
    );
    const resutlfilePath = await saveCode(pythonCode);
    const url = await drawChart(resutlfilePath);
    return url;
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      throw Error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      throw error;
    }
  }
};
const extractBetweenBackticks = (text) => {
  const regex = /```(.*?)```/s;
  const match = text.match(regex);

  if (match && match[1]) {
    return match[1].replace(/\n/g, " ").replace("sql", "");
  }

  return match[1];
};
const extractBetweenBackticksPython = (text) => {
  const regex = /```(.*?)```/s;
  const match = text.match(regex);

  if (match && match[1]) {
    return match[1].replace("python", "");
  }
  return match[1];
};

const runQuery = async (query) => {
  try {
    const results = await dbService.runQuery(query, []);

    return results;
  } catch (err) {
    // Handle errors
    console.error("Error:", err);
  }
};

const saveCode = async (code) => {
  try {
    await fs.promises.writeFile(__dirname + "/chart.py", code);
    return `${__dirname}/chart.py`;
    console.log("Successfully wrote to the file");
  } catch (err) {
    console.error("Error writing to the file", err);
  }
};
