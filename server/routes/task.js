const express = require('express')
const router = express.Router();
const {authToken} = require("../middleware/auth")
const {createTask, deleteTask} = require("../controllers/task")


router.post(("/"), authToken, createTask)
router.delete(("/:id"), authToken, deleteTask)








module.exports = router;
