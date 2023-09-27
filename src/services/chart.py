
import matplotlib.pyplot as plt

data = [{"company_name":"Apple"},{"company_name":"Microsoft"},{"company_name":"Alphabet Class C"},{"company_name":"Alphabet Class A"},{"company_name":"Amazon"}]

company_names = [item['company_name'] for item in data]

plt.bar(range(len(company_names)), [1]*len(company_names), tick_label=company_names)

plt.xlabel('Company Names')
plt.ylabel('Count')

plt.title('Company Count Chart')

plt.savefig('output.jpg')
plt.show()
