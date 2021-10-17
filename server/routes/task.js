const express = require('express')
const router = express.Router();
const {authToken} = require("../middleware/auth")
const {createTask} = require("../controllers/task")


router.post(("/"), authToken, createTask)








module.exports = router;
