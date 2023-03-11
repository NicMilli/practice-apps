const model = require('../model');

module.exports = {
  form1: (req, res) => {
    model.form1(req.body, req.session_id ).then(() => {
      res.status(201).send();
    }).catch((err) => {
      res.status(404).send(err);
    });
  },
  form2: (req, res) => {
    model.form2(req.body, req.session_id ).then((resp) => {
      console.log(resp)
      res.status(201).send();
    }).catch((err) => {
      console.log(err)
      res.status(404).send(err);
    });
  },
  form3: (req, res) => {
    model.form3(req.body, req.session_id ).then(() => {
      res.status(201).send();
    }).catch((err) => {
      res.status(404).send(err);
    });
  },
  confirmation: (req, res) => {
    model.confirmation(req.body, req.session_id ).then(() => {
      res.status(201).send();
    }).catch((err) => {
      res.status(404).send(err);
    });
    res.sendStatus(202);
  },
  getAll: (req, res) => {
    console.log('getAll')
    res.sendStatus(200);
  }
}