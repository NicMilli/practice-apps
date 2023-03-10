require("dotenv").config();
const express = require("express");
const router = require('./Routes');
const path = require("path");
const controller = require('./controller');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.use('/words', router);

//app.get('/words', controller.getAll);
// app.post('/words', controller.addWord);
// app.put('/words', controller.editWord);
// app.delete('/words', controller.deleteWord);
// app.get('/words/search', controller.searchWord);


let port = process.env.PORT || 3200;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
