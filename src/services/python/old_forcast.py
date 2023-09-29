import numpy as np
import matplotlib.pyplot as plt

# Constants
  # 12 months of historical data
FORECAST_DAYS = 365     # 3 months of forecast
START_PRICE = 100      # Starting price of the share
FLUCTUATION_MIN = -10  # Minimum daily fluctuation
FLUCTUATION_MAX = 10   # Maximum daily fluctuation
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
HISTORICAL_DAYS = len(prices)-1
# Convert prices to numpy array
prices = np.array(prices)

last_price = prices[-1]

# Generate future forecast data
future_max = np.linspace(last_price, last_price + 60, FORECAST_DAYS)
future_min = np.linspace(last_price, last_price - 30, FORECAST_DAYS)
future_mean = np.linspace(last_price, last_price + 10, FORECAST_DAYS)

# Calculate percentage changes
max_pct_change = ((future_max[-1] - last_price) / last_price) * 100
min_pct_change = ((future_min[-1] - last_price) / last_price) * 100
mean_pct_change = ((future_mean[-1] - last_price) / last_price) * 100

# Plotting
plt.figure(figsize=(14, 6))

# Plot past prices
plt.plot(prices, color="#5217af")

# Draw arrows for future forecast data
plt.arrow(HISTORICAL_DAYS-1, last_price, FORECAST_DAYS, future_max[-1]-last_price, head_width=3, head_length=2, fc='green', ec='green', linestyle="--")
plt.arrow(HISTORICAL_DAYS-1, last_price, FORECAST_DAYS, future_min[-1]-last_price, head_width=3, head_length=2, fc='red', ec='red', linestyle="--")
plt.arrow(HISTORICAL_DAYS-1, last_price, FORECAST_DAYS, future_mean[-1]-last_price, head_width=3, head_length=2, fc='orange', ec='orange', linestyle="--")

# Fill areas between forecast lines
plt.fill_between(range(HISTORICAL_DAYS+1), min(prices), prices, color='#dbc9fa', alpha=0.5)
plt.fill_between(range(HISTORICAL_DAYS, HISTORICAL_DAYS + FORECAST_DAYS), future_min, future_mean, color='orange', alpha=0.3)
plt.fill_between(range(HISTORICAL_DAYS, HISTORICAL_DAYS + FORECAST_DAYS), future_max, future_mean, color='lightgreen', alpha=0.3)

# Annotate with percentage changes
plt.annotate(f'Max: {future_max[-1]:.2f}\n({max_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS-1, future_max[-1]), textcoords="offset points", xytext=(-60,10), ha='center')
plt.annotate(f'Min: {future_min[-1]:.2f}\n({min_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS-1, future_min[-1]), textcoords="offset points", xytext=(-60,-10), ha='center')
plt.annotate(f'Avg: {future_mean[-1]:.2f}\n({mean_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS-1, future_mean[-1]), textcoords="offset points", xytext=(-60,0), ha='center')

# Draw vertical line at the end of historical data
plt.axvline(x=HISTORICAL_DAYS + FORECAST_DAYS-1, color='black', linestyle='--')

# Set title and labels
plt.title(f"{companyName} Share Price Forecast")
plt.xlabel("Days")
plt.ylabel("Price $")
file_name = os.path.basename(file_path)
plt.savefig("./public/charts/" + os.path.splitext(file_name)[0] + ".jpg")
# Show the plot
plt.show()