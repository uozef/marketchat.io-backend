
import matplotlib.pyplot as plt

data = [{"company_name":"VMware","dividend":27.399},{"company_name":"RELX plc","dividend":17}]

# Extract company names and dividend amounts from data
companies = [d['company_name'] for d in data]
dividends = [d['dividend'] for d in data]

# Create bar chart
plt.bar(companies, dividends)
plt.xlabel('Company')
plt.ylabel('Dividend')

# Save the chart as output.jpg
plt.savefig('output.jpg')

# Display the chart
plt.show()
