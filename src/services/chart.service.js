const { exec } = require("child_process");
const fs=require('fs');
const path=require("path");
exports.drawChart = async (pythonPath) => {
  try {

    exec(`python3 "${pythonPath}"`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`Python Output: ${stdout}`);
        if (stderr) {
          console.error(`Python Error: ${stderr}`);
        }
      });
      const url=await moveFileToPublic();
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

exports.drawForcastChart = async (dataPath) => {
  try {

    exec(`python3 "${__dirname}/python/forcast_chart.py" ${dataPath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`Python Output: ${stdout}`);
        if (stderr) {
          console.error(`Python Error: ${stderr}`);
        }
      });
    return path.join(__dirname, 'output.png');
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

async function moveFileToPublic() {
  const timestamp = new Date().getTime();
  const sourcePath = './output.jpg';
  const destinationPath = `public/charts/ch-${timestamp}.jpg`;
  try {
    await fs.promises.rename(sourcePath, destinationPath);
   return `ch-${timestamp}`;
  } catch (err) {
    console.error(`Error moving or renaming the file: ${err}`);
  }
}