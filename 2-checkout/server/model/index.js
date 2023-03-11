const db = require('../db.js');
const mysql = require('mysql2');

module.exports = {
  form1: ({name, email, password}, session_id) => {
    const userQuery = 'INSERT INTO users (id, sessionId) VALUES (0, ?)';
    const respQuery = 'INSERT INTO responses (name, email, password, user_id) VALUES (?, ?, ?, ?)';
    return db.queryAsync(userQuery, [session_id]).then((results) =>{
      return db.queryAsync('SELECT * FROM users WHERE sessionId=?', [session_id]);
    }).then((resp) => {
      return db.queryAsync(respQuery, [name, email, password, resp[0][0].id]);
    })
  },
  form2: ({line1, line2, city, state, zip, phoneNo}, session_id) => {
    return db.queryAsync('SELECT * FROM users WHERE sessionId=?', [session_id])
    .then((resp) => {
      const respQuery = 'UPDATE responses SET line1=?, line2=?, city=?, state=?, zip=?, phoneNo=? WHERE user_id=?';
      return db.queryAsync(respQuery, [line1, line2, city, state, zip, phoneNo, resp[0][0].id]);
    });
  },
  form3: (formValues) => {

  },
  confirmation: (bool) => {

  },
  getAll: () => {

  }
}