const express = require("express");
const app = express();
const UserRoute = require("./routes/userroutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const DatabaseConnection = require("./Databaseconfig");
const cors = require("cors");

app.use(cors());
app.use(express.json()); // parsing the data coming from body
app.use(bodyParser.urlencoded({ extended: true }));
DatabaseConnection();
// this are the middleware allow to access the route only with given end point
app.use("/user", UserRoute);
const port = 4000;
app.listen(port, console.log(`server is running at port ${port}`));
