module.exports = {
    // Application configuration
    app: {
      port: process.env.PORT || 3000,
      environment: process.env.NODE_ENV || 'development',
    },
  
    // Database configuration
    database: {
      url: process.env.DB_URL || 'mongodb://localhost/mydatabase',
    },
  
    // Authentication configuration
    auth: {
      secretKey: process.env.AUTH_SECRET_KEY || 'your-secret-key',
      expiresIn: process.env.AUTH_EXPIRES_IN || '7d', // Example: '1h', '7d', '30d'
    },
  
    // Other configuration variables
    // Add any other configuration variables your application needs here
  };
  