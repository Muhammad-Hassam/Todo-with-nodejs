const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser')
const app = express();

app.use(cors("*"))
app.use(express.static("public"))
app.use(bodyParser.json())

app.listen(8000)