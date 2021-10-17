const taskModel = require("../models/TaskModel")

exports.createTask = async (req, res, next)  =>{
    const {task, description} = req.body
    const userId = req.user

    const newTask = await new taskModel({
        task, description, author: userId
    })
    
    newTask.save()  
    .then(() => res.sendStatus(201).json())
    .catch(() => res.status(400).json("Missing values")) 

}