const express = require('express')
const router = express.Router();
const UserModel = require("../models/UserModel")
const {createUser} = require("../controllers/user")


router
    .route("/")
    .post(createUser); 

module.exports = router;
