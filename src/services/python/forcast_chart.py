import numpy as np
import matplotlib.pyplot as plt
import json
import sys  # Import the sys module to access command-line arguments

# Check if the correct number of command-line arguments are provided
if len(sys.argv) != 2:
    print("Usage: python script.py <file_path>")
    sys.exit(1)

file_path = sys.argv[1] 
# Load data from the JSON file
with open(file_path, "r") as file:
    data = json.load(file)["isHaveData"]

# Extract relevant data into lists
dates = [entry["date"] for entry in data]
prices = [entry["price"] for entry in data]

# Constants
HISTORICAL_DAYS = len(data)  # Number of historical days
FORECAST_DAYS = 63           # Number of forecast days
START_PRICE = prices[0]      # Starting price of the share
FLUCTUATION_MIN = -10        # Minimum daily fluctuation
FLUCTUATION_MAX = 10         # Maximum daily fluctuation

# Set seed for reproducibility
np.random.seed(42)

# Generate past data
fluctuations = np.random.randint(FLUCTUATION_MIN, FLUCTUATION_MAX + 1, HISTORICAL_DAYS)
past_prices = [START_PRICE]
for fluctuation in fluctuations:
    past_prices.append(past_prices[-1] + fluctuation)

# Set the last historical price
last_price = past_prices[-1]

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
plt.plot(past_prices, color="blue")

# Draw arrows for future forecast data
plt.arrow(HISTORICAL_DAYS-1, last_price, FORECAST_DAYS, future_max[-1]-last_price, head_width=3, head_length=2, fc='green', ec='green', linestyle="--")
plt.arrow(HISTORICAL_DAYS-1, last_price, FORECAST_DAYS, future_min[-1]-last_price, head_width=3, head_length=2, fc='red', ec='red', linestyle="--")
plt.arrow(HISTORICAL_DAYS-1, last_price, FORECAST_DAYS, future_mean[-1]-last_price, head_width=3, head_length=2, fc='orange', ec='orange', linestyle="--")

# Fill areas between forecast lines
plt.fill_between(range(HISTORICAL_DAYS+1), min(past_prices), past_prices, color='lightblue', alpha=0.5)
plt.fill_between(range(HISTORICAL_DAYS, HISTORICAL_DAYS + FORECAST_DAYS), future_min, future_mean, color='orange', alpha=0.3)
plt.fill_between(range(HISTORICAL_DAYS, HISTORICAL_DAYS + FORECAST_DAYS), future_max, future_mean, color='lightgreen', alpha=0.3)

# Annotate with percentage changes
plt.annotate(f'Max: {future_max[-1]:.2f}\n({max_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS-1, future_max[-1]), textcoords="offset points", xytext=(-60,10), ha='center')
plt.annotate(f'Min: {future_min[-1]:.2f}\n({min_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS-1, future_min[-1]), textcoords="offset points", xytext=(-60,-10), ha='center')
plt.annotate(f'Avg: {future_mean[-1]:.2f}\n({mean_pct_change:.2f}%)', xy=(HISTORICAL_DAYS + FORECAST_DAYS-1, future_mean[-1]), textcoords="offset points", xytext=(-60,0), ha='center')

# Draw vertical line at the end of historical data
plt.axvline(x=HISTORICAL_DAYS + FORECAST_DAYS-1, color='black', linestyle='--')

# Set title and labels
plt.title("Apple Share Price Forecast")
plt.xlabel("Days")
plt.ylabel("Price")

# Show the plot
plt.show()
