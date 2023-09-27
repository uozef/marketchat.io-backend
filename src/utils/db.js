const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
  password: '123',
  database: 'marketchat',
});

module.exports = connection.promise();
