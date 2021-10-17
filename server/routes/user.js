const express = require('express')
const router = express.Router();
const UserModel = require("../models/UserModel")
const {createUser, getUser} = require("../controllers/user")



router.post("/", createUser); 
router.get("/", getUser)

module.exports = router;

