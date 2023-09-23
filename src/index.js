const app = require('./app'); // Import your Express app
const config = require('./config'); // Import your configuration

// Start the server
const port = config.app.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port} in ${config.app.environment} mode`);
});
