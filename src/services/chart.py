
import matplotlib.pyplot as plt

data = [
    {"ticker":"AAPL"},{"ticker":"TSLA"},{"ticker":"TCTZF"},{"ticker":"ORCL"},{"ticker":"ASML"},{"ticker":"ADBE"},{"ticker":"CSCO"},
    {"ticker":"ACN"},{"ticker":"CRM"},{"ticker":"NFLX"},{"ticker":"SAP"},{"ticker":"QCOM"},{"ticker":"AMAT"},{"ticker":"ADI"},
    {"ticker":"LRCX"},{"ticker":"MU"},{"ticker":"NTES"},{"ticker":"RLXXF"},{"ticker":"SHOP"},{"ticker":"PYPL"},{"ticker":"KLAC"}
]

tickers = [d['ticker'] for d in data]

# Prepare the chart
fig, ax = plt.subplots()
ax.barh(range(len(tickers)), [1] * len(tickers), align='center', height=0.4)
ax.set_yticks(range(len(tickers)))
ax.set_yticklabels(tickers)
ax.set_xlabel('Value')

# Save the chart as an image
plt.savefig('output.jpg')
