
import matplotlib.pyplot as plt

# Data
data = {"id": 1, "ticker": "AAPL", "company_name": "Apple"}

# Create a bar chart
plt.bar(data["id"], data["ticker"])

# Set chart title and labels
plt.title("Company Ticker")
plt.xlabel("Company ID")
plt.ylabel("Ticker")

# Save the chart as output image
plt.savefig("output.jpg")

# Display the chart
plt.show()
