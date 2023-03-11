const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, sessionId VARCHAR(50) UNIQUE)"
    )
  ).then(() => {
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (user_id INT NOT NULL, name VARCHAR(50), email VARCHAR(20), password VARCHAR(20), line1 VARCHAR(20), line2 VARCHAR(20), city VARCHAR(20), zip VARCHAR(10), state VARCHAR(10), phoneNo BIGINT, cc INT, exp VARCHAR(10), cvv INT, billingZip INT, FOREIGN KEY (user_id) REFERENCES users(id))"
    )
  })
  .catch((err) => console.log(err));

module.exports = db;
