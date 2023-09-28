
import matplotlib.pyplot as plt

data = {"company_name": "Apple"}

# Plotting the chart
plt.bar(data.keys(), data.values())

# Adding labels
plt.xlabel("Company")
plt.ylabel("Value")

# Saving the chart as an image
plt.savefig('output.jpg')
