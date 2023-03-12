const db = require('../db.js');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');

module.exports = {
  form1: ({name, email, password}, session_id) => {
    //Hash password
    var hashP = bcrypt.genSalt(10).then((salt) => {
      return hashedPassword = bcrypt.hash(password, salt);
    });

    const userQuery = 'INSERT INTO users (id, sessionId) VALUES (0, ?)';
    const dbQ = db.queryAsync(userQuery, [session_id])
      .then((results) =>{
      return db.queryAsync('SELECT * FROM users WHERE sessionId=?', [session_id]);
    })
    return Promise.all([hashP, dbQ]).then(([hash, resp]) => {
      const respQuery = 'INSERT INTO responses (name, email, password, user_id) VALUES (?, ?, ?, ?)';
      return db.queryAsync(respQuery, [name, email, hash, resp[0][0].id]);
    })
  },
  form2: ({line1, line2, city, state, zip, phoneNo}, session_id) => {
    return db.queryAsync('SELECT * FROM users WHERE sessionId=?', [session_id])
    .then((resp) => {
      const respQuery = 'UPDATE responses SET line1=?, line2=?, city=?, state=?, zip=?, phoneNo=? WHERE user_id=?';
      return db.queryAsync(respQuery, [line1, line2, city, state, zip, phoneNo, resp[0][0].id]);
    });
  },
  form3: ({cc, exp, cvv, billzip}, session_id) => {
    // //Hash password

    var hash = bcrypt.genSalt(10).then((salt) => {
      return hashedPassword = bcrypt.hash(cvv, salt);
    });

    const dbQ = db.queryAsync('SELECT * FROM users WHERE sessionId=?', [session_id]);

    Promise.all([hash, dbQ]).then(([hash, resp]) => {
      const respQuery = 'UPDATE responses SET cc=?, exp=?, cvv=?, billingZip=? WHERE user_id=?';
      return db.queryAsync(respQuery, [cc, exp, hash, billzip, resp[0][0].id]);
    })
  },
  confirmation: (session_id) => {
    return db.queryAsync('SELECT * FROM users WHERE sessionId=?', [session_id])
    .then((resp) => {
      const respQuery = 'UPDATE responses SET confirmation=1 WHERE user_id=?';
      return db.queryAsync(respQuery, [resp[0][0].id]);
    });
  },
  getAllForms: (session_id) => {
    return db.queryAsync('SELECT * FROM users WHERE sessionId=?', [session_id])
    .then((resp) => {
      const respQuery = 'SELECT * FROM responses WHERE user_id=?';
      return db.queryAsync(respQuery, [resp[0][0].id]);
    });
  }
}