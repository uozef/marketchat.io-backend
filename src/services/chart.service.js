const { exec } = require("child_process");
const pythonCode = `
import matplotlib.pyplot as plt

# Data
tickers = ["DHT", "BWXT", "TKO", "GPOR", "AMRC", "RIO", "UTI", "WNS", "CVE", "AZO"]
prices = [10.005, 74.33, 84.05, 110.72, 42.035, 64.07, 8.43, 67.82, 19.835, 2566.7]

# Create a bar chart
plt.figure(figsize=(10, 6))
plt.bar(tickers, prices, color='skyblue')
plt.xlabel('Ticker')
plt.ylabel('Price')
plt.title('Stock Prices')
plt.xticks(rotation=45)

# Save the chart as a JPG file
plt.savefig('stock_prices_chart.jpg')

import matplotlib.pyplot as plt

# Data
tickers = ["DHT", "BWXT", "TKO", "GPOR", "AMRC", "RIO", "UTI", "WNS", "CVE", "AZO"]
best_price_target_upside = [36.63, 13.68, 49.67, 29.38, 53.44, 13.55, 22.54, 29.39, 13.39, 13.23]

# Create a bar chart
plt.figure(figsize=(10, 6))
plt.barh(tickers, best_price_target_upside, color='skyblue')
plt.xlabel('Best Price Target Upside (%)')
plt.title('Top 10 Stocks with the Highest Best Price Target Upside')
plt.gca().invert_yaxis()  # Invert the y-axis to show the highest upside at the top
plt.grid(axis='x', linestyle='--', alpha=0.6)

# Display the chart
plt.savefig('output.jpg')

`;
const path=require("path");
exports.drawChart = async (code) => {
  try {
    const pythonScriptPath = path.join(__dirname, 'chart.py');

    exec(`python3 "${pythonScriptPath}"`, (error, stdout, stderr) => {
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
