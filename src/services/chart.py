
import matplotlib.pyplot as plt

# Example data
data = [{"company_name": "Apple", "revenue": 100}, {"company_name": "Google", "revenue": 80}, {"company_name": "Microsoft", "revenue": 90}]

# Extract company names and revenue from data
company_names = [d["company_name"] for d in data]
revenues = [d["revenue"] for d in data]

# Create a bar chart
plt.bar(company_names, revenues)

# Add labels and title
plt.xlabel("Company")
plt.ylabel("Revenue")
plt.title("Revenue by Company")

# Save the chart as an image
plt.savefig("output.jpg")
