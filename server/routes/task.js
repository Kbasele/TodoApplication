const express = require('express')
const router = express.Router();
const {authToken} = require("../middleware/auth")
const {createTask, deleteTask, getTasks} = require("../controllers/task")


router.get(("/"), authToken, getTasks)
router.post(("/"), authToken, createTask)
router.delete(("/:id"), authToken, deleteTask)








module.exports = router;
