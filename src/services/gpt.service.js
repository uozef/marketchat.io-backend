const OpenAI = require("openai");
const dbService = require("./db.service");
const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const fs = require("fs");
const util = require("util");
const { drawChart } = require("./chart.service");
const tipranksService = require('../services/tiprank.service');
const readFileAsync = util.promisify(fs.readFile);

exports.getGPTResponse = async (prompt) => {
  try {
    const filePath = __dirname + "/../prompts/ddl_prompt.txt";
    const prePrompt = await readFileAsync(filePath, "utf8");

    const completion = await openAI.chat.completions.create({
      messages: [{ role: "user", content: prePrompt + prompt }],
      model: "gpt-3.5-turbo",
    });
    if (completion?.choices[0]?.message?.content!=null){
      console.log(completion?.choices[0]?.message?.content);
      const query = extractSubstringBetweenHashes(
        completion?.choices[0]?.message?.content
      );
      if (query!=null){
        console.log("this is query",query)
        const result = await runQuery(query);
        const resultStocks=result[0];
        let detail;
        if (resultStocks.length==1){
          const stock=resultStocks[0]['ticker'].toLowerCase();
          detail=await tipranksService.getStockDetail(stock);
        }else{
      const url = await getGPTChart(JSON.stringify(result[0]));
        }    
        return { data:resultStocks,detail:detail};
      }else{
        throw Error("null query");
      }
    }else{
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
    const resutlfilePath=await saveCode(pythonCode);
    const url=await drawChart(resutlfilePath);
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
function extractSubstringBetweenHashes(inputString) {
  const regex = /#(.*?)#/g;
  const matches = [];
  let match;

  while ((match = regex.exec(inputString)) !== null) {
    matches.push(match[1]);
  }

  return matches[0];
}

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
    await fs.promises.writeFile(__dirname+"/chart.py", code);
    return `${__dirname}/chart.py`;
    console.log("Successfully wrote to the file");
  } catch (err) {
    console.error("Error writing to the file", err);
  }

};
