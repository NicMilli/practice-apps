const express = require("express");
const router = express.Router();
const controller = require('../controller');
const multer = require('multer');
const upload = multer();

router.get('/', controller.getAllForms)
.post('/form1', upload.none(), controller.form1)
.post('/form2', upload.none(), controller.form2)
.post('/form3', upload.none(), controller.form3)
.post('/confirmation', upload.none(), controller.confirmation)

module.exports = router;