const OpenAI = require("openai");
const dbService = require("./db.service");
const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const fs = require("fs");
const util = require("util");
const { drawChart } = require("./chart.service");

const readFileAsync = util.promisify(fs.readFile);

exports.getGPTResponse = async (prompt) => {
  try {
    const filePath = __dirname + "/../prompts/ddl_prompt.txt";
    const prePrompt = await readFileAsync(filePath, "utf8");

    const completion = await openAI.chat.completions.create({
      messages: [{ role: "user", content: prePrompt + prompt }],
      model: "gpt-3.5-turbo",
    });
    const query = extractBetweenBackticks(
      completion.choices[0].message.content
    );
    const result = await runQuery(query);
    const url = await getGPTChart(JSON.stringify(result[0]));
    return { result: url ,data:result[0]};
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
    await fs.promises.writeFile(__dirname+"/chart.py", code);
    return `${__dirname}/chart.py`;
    console.log("Successfully wrote to the file");
  } catch (err) {
    console.error("Error writing to the file", err);
  }

};
