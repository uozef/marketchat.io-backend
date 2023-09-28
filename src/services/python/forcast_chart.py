import numpy as np
import matplotlib.pyplot as plt
import json
import sys
import os

# Check if the correct number of command-line arguments are provided
if len(sys.argv) != 2:
    print("Usage: python script.py <file_path>")
    sys.exit(1)

file_path = sys.argv[1]
# Load data from the JSON file
with open(file_path, "r") as file:
    data = json.load(file)
    companyName = data.get("companyName", "").upper()
    price_data = data.get("isHaveData", [])
    forecast = data.get("forcast", {})

# Extract relevant data into lists
dates = [entry["date"] for entry in price_data]
prices = [entry["price"] for entry in price_data]

# Convert prices to numpy array
prices = np.array(prices)

# Constants
HISTORICAL_DAYS = len(price_data)
FORECAST_DAYS = 63
START_PRICE = prices[0]
FLUCTUATION_MIN = -10
FLUCTUATION_MAX = 10

# Set the last historical price
last_price = prices[-1]

# Get forecast values from the data
forecast_max = forecast.get("max", last_price + 60)
forecast_min = forecast.get("min", last_price - 30)
forecast_avg = forecast.get("avg", last_price + 10)

# Generate future forecast data
future_max = np.linspace(last_price, forecast_max, FORECAST_DAYS)
future_min = np.linspace(last_price, forecast_min, FORECAST_DAYS)
future_mean = np.linspace(last_price, forecast_avg, FORECAST_DAYS)

# Calculate percentage changes
max_pct_change = ((forecast_max - last_price) / last_price) * 100
min_pct_change = ((forecast_min - last_price) / last_price) * 100
mean_pct_change = ((forecast_avg - last_price) / last_price) * 100

# Plotting
plt.figure(figsize=(14, 6))

# Plot past prices
plt.plot(prices, color="blue")

# Draw arrows for future forecast data
plt.arrow(HISTORICAL_DAYS - 1, last_price, FORECAST_DAYS, forecast_max - last_price, head_width=3, head_length=2, fc='green', ec='green', linestyle="--")
plt.arrow(HISTORICAL_DAYS - 1, last_price, FORECAST_DAYS, forecast_min - last_price, head_width=3, head_length=2, fc='red', ec='red', linestyle="--")
plt.arrow(HISTORICAL_DAYS - 1, last_price, FORECAST_DAYS, forecast_avg - last_price, head_width=3, head_length=2, fc='orange', ec='orange', linestyle="--")

# Fill areas between forecast lines
plt.fill_between(range(HISTORICAL_DAYS, HISTORICAL_DAYS + FORECAST_DAYS), forecast_min, forecast_avg, color='orange', alpha=0.3)
plt.fill_between(range(HISTORICAL_DAYS, HISTORICAL_DAYS + FORECAST_DAYS), forecast_max, forecast_avg, color='lightgreen', alpha=0.3)

# Annotate with percentage changes
plt.annotate(f'Max: {forecast_max:.2f}\n({max_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS - 1, forecast_max), textcoords="offset points", xytext=(-60, 10), ha='center')
plt.annotate(f'Min: {forecast_min:.2f}\n({min_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS - 1, forecast_min), textcoords="offset points", xytext=(-60, -10), ha='center')
plt.annotate(f'Avg: {forecast_avg:.2f}\n({mean_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS - 1, forecast_avg), textcoords="offset points", xytext=(-60, 0), ha='center')

# Draw vertical line at the end of historical data
plt.axvline(x=HISTORICAL_DAYS + FORECAST_DAYS - 1, color='black', linestyle='--')

# Set title based on companyName in uppercase
plt.title(f"{companyName} Share Price Forecast")
plt.xlabel("Days")
plt.ylabel("Price")

# Show the plot/plt.show()
file_name = os.path.basename(file_path)
plt.savefig("./public/charts/" + os.path.splitext(file_name)[0] + ".jpg")

# Display the plot
plt.show()
