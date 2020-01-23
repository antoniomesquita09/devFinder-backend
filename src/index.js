const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
var dotenv = require("dotenv");

dotenv.config();
var url = process.env.MONGOLAB_URI;

const app = express();

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
