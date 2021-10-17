const express = require('express')
const router = express.Router();
const UserModel = require("../models/UserModel")
const {createUser, getUser, loginUser} = require("../controllers/user")
const {authToken} = require("../middleware/auth")



router.post("/", createUser); 
router.get("/", authToken, getUser)
router.post("/login", loginUser)

module.exports = router;

