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
        const baseUrl =  `https://giaiw3yby0.execute-api.ap-southeast-2.amazonaws.com/Test/bff/prod/stock/${stock}/payload.json?ver=${timestamp}`;
        const response = await axios.get(baseUrl);
        const targets=calculatePriceTargetStats(response.data.analysts.ratings);
        const withCompanyName={
          companyName:stock,
          isHaveData:response.data.charts.isHaveData,
          forcast:{
            min:targets.lowestPriceTarget,
            max:targets.highestPriceTarget,
            avg:targets.averagePriceTarget
          }
          
        };
  
        const dataPath=await saveDATA(JSON.stringify(withCompanyName),stock,timestamp);
        await drawForcastChart(dataPath);
        return {filename:stock+"-"+timestamp};
      } catch (error) {
        // Log any error that occurs during the request
        console.error('Error sending GET request:', error);
      }
}
function calculatePriceTargetStats(ratings) {
  let highestPriceTarget = Number.MIN_VALUE;
  let lowestPriceTarget = Number.MAX_VALUE;
  let totalPriceTarget = 0;
  let count = 0; // Keep track of the number of non-null values

  if (ratings?.length!=null){

  ratings.forEach((rating) => {
    const priceTarget = rating?.priceTarget?.value;
    console.log(priceTarget);
    if (priceTarget !== null) {
      count++; // Increment count for non-null values
      totalPriceTarget += priceTarget;

      if (priceTarget > highestPriceTarget) {
        highestPriceTarget = priceTarget;
      }

      if (priceTarget < lowestPriceTarget) {
        lowestPriceTarget = priceTarget;
      }
    }
  });
  }else{
    console.log(ratings);
  }


  console.log(highestPriceTarget);
  console.log(lowestPriceTarget);
  // Check if there are non-null values before calculating the average
  const averagePriceTarget = (parseFloat(lowestPriceTarget)+parseFloat(highestPriceTarget))/2

  return {
    highestPriceTarget,
    lowestPriceTarget,
    averagePriceTarget
  };
}
