const express = require('express')
const router = express.Router();
const {authToken} = require("../middleware/auth")
const {createTask, deleteTask, getTasks, editTask} = require("../controllers/task")


router.get(("/"), authToken, getTasks)
router.post(("/"), authToken, createTask)
router.put(("/:id"), authToken, editTask)
router.delete(("/:id"), authToken, deleteTask)








module.exports = router;
