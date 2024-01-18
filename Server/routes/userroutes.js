const express = require("express");
const router = express.Router();
// this is post route end point
// this is the controllers that will handle or save the data in db
const UserControllers = require("../Controllers/user");
router.post("/savealldata", UserControllers);
module.exports = router;
