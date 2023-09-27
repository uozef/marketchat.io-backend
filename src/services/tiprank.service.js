const axios=require('axios');
const { drawForcastChart } = require('./chart.service');
const fs=require('fs')
const saveDATA = async (data,stock,timestamp) => {
    try {
        const path=__dirname+`/python/data/${stock}-${timestamp}.json`;
      await fs.promises.writeFile(path, data);
      return path;
    } catch (err) {
        console.log(err)
    }
  
  };
exports.getStockDetail = async (stock) => {
    try {
        const timestamp = new Date().getTime();
        const baseUrl =  `https://tr-cdn.tipranks.com/bff/prod/stock/${stock}/payload.json?ver=${timestamp}`;
        const response = await axios.get(baseUrl);
        const dataPath=await saveDATA(JSON.stringify(response.data.charts),stock,timestamp);
        const chart=drawForcastChart(dataPath);
        return chart;
      } catch (error) {
        // Log any error that occurs during the request
        console.error('Error sending GET request:', error);
      }
}
