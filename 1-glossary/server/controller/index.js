const model = require('../model');

module.exports = {
  getAll: function (req, res) {
    model.getAll().then((response) => {
      res.status(200);
      res.send(response);
    }).catch((e) => {
      res.status(500);
      res.send('Error retrieving from the database')
    });
  },
  addWord: function (req, res) {
    model.addWord(req.body).then((response) => {
      res.status(201);
      res.send(response);
    }).catch((e) => {
      res.status(500);
      res.send('Error saving to the database')
    });
  },
  editWord: function (req, res) {
    model.editWord(req.body).then((response) => {
      res.status(201);
      res.send(response);
    }).catch((e) => {
      res.status(500);
      res.send('Error editing the database')
    });
  },
  deleteWord: function (req, res) {
    model.deleteWord(req.body).then((response) => {
      res.status(200);
      res.send(response);
    }).catch((e) => {
      res.status(500);
      res.send('Error deleting from the database')
    });
  },
}