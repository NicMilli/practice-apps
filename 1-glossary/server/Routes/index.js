const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.route('/')
.get(controller.getAll)
.post(controller.addWord)
.put(controller.editWord)
.delete(controller.deleteWord);

router.route('/search')
.get(controller.searchWord);

module.exports = router;