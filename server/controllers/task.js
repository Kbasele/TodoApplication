const { findByIdAndDelete, findOne } = require("../models/TaskModel")
const taskModel = require("../models/TaskModel")
const userModel = require("../models/UserModel")

exports.createTask = async (req, res, next)  =>{
    const {task, description} = req.body
    const userId = req.user

    const newTask = await new taskModel({
        task, description, author: userId
    })
    
    newTask.save()  
    .then(() => res.sendStatus(201).json())
    .catch(() => res.status(400).json("Missing values"));
    

}

exports.deleteTask = async (req, res, next) =>{
    const taskId = req.params.id
    const author = req.user

    
    await taskModel.findById(taskId)
    .then(item =>{
        //checks for right author
        if(item.author.toString() === author){
            item.remove()
            .then(() => res.sendStatus(200).json())
            .catch(()=>res.sendStatus(400).json()); 
        }
        else res.sendStatus(403).json(); 
        
    }) 

}
exports.editTask = async (req, res, next) =>{
    const taskId = req.params.id; 
    const author = req.user; 
    const {task, description} = req.body; 

    await taskModel.findById(taskId)
    .then(item =>{
        //checks for right author
        if(item.author.toString() === author){
            item.updateOne(({task, description}), {new: true})
            .then(()=>res.sendStatus(200).json())
            .catch(()=>res.sendStatus(400).json()); 
        }
        else {
            res.sendStatus(403).json(); 
        }
    }) 

}

exports.getTasks = async(req, res, next) =>{
    const userId = req.user; 
    const tasks = await taskModel.find({author: userId})
    .then((item) => res.status(200).json(item))
    .catch(()=>res.SendStatus(400).json()); 
}