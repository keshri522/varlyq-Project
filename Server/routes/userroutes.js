const express = require("express");
const router = express.Router();
// this is post route end point
// this is the controllers that will handle or save the data in db
const { UserControllers, getAllUsers } = require("../Controllers/user");
router.post("/savealldata", UserControllers); // this is post route
router.get("/getalldata", getAllUsers); // this is for getting all the data
module.exports = router;
