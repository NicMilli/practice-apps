require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


let port = process.env.PORT || 3200;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
