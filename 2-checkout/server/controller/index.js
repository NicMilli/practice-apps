const model = require('../model');

module.exports = {
  form1: (req, res) => {
    model.form1(req.body, req.session_id ).then(() => {
      res.status(201).send();
    }).catch((err) => {
      console.log(err.sqlMessage)
      res.status(404).send(err.sqlMessage);
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
    model.form3(req.body, req.session_id ).then((resp) => {
      console.log(resp)
      res.status(201).send();
    }).catch((err) => {
      console.log(err)
      res.status(404).send(err);
    });
  },
  confirmation: (req, res) => {
    model.confirmation(req.session_id).then(() => {
      res.status(201).send();
    }).catch((err) => {
      res.status(404).send(err);
    });
  },
  getAllForms: (req, res) => {
    console.log(req.session_id)
    model.getAllForms(req.session_id).then((response) => {
      console.log('succ', response)
      res.status(201).send(response);
    }).catch((err) => {
      console.log(err)
      res.status(404).send(err);
    });
  }
}