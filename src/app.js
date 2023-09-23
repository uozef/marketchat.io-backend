const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // For loading environment variables from a .env file

dotenv.config(); // Load environment variables from .env file if present

const app = express();

// Middleware to enhance security
app.use(helmet());

// Middleware to enable CORS
app.use(cors());

// Middleware for request logging
app.use(morgan('combined'));

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define your routes by importing them
const apiRoutes = require('./routes/index');

// Use the routes with appropriate prefixes
app.use('/api', apiRoutes);
// Define a simple test route
app.get('/', (req, res) => {
  res.send('Hello, World! This is your Express app.');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
