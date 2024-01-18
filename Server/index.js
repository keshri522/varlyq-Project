const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const DatabaseConnection = require("./Databaseconfig");
const cors = require("cors");

app.use(cors());
DatabaseConnection();
const port = 4000;
app.listen(port, console.log(`server is running at port ${port}`));
