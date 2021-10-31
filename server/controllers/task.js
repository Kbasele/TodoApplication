const { findByIdAndDelete, findOne } = require("../models/TaskModel")
const taskModel = require("../models/TaskModel")
const userModel = require("../models/UserModel")
const moment = require('moment')

const getDate = () => {
    const date = moment()
    const dateNow = date.format('MMMM Do YYYY, h:mm:ss a')
    return dateNow
}

exports.createTask = async (req, res, next)  =>{
    const {task, description} = req.body
    const userId = req.user
    const date = getDate()

    const newTask = await new taskModel({
        task, description, author: userId, date 
    })
    
    newTask.save()  
    .then(item => {
        userModel.findByIdAndUpdate(userId,{$push: {"tasks": item}})
        .then(()=>res.sendStatus(201).json())
    })
    .catch(() => res.status(400).json("Missing values"));
    

}

exports.deleteTask = async (req, res, next) =>{
    const taskId = req.params.id
    const author = req.user

    
    await taskModel.findById(taskId)
    .then(item =>{
        if(item.author.toString() === author){
            item.remove()
            .then(() => res.sendStatus(200).json())
            .catch(()=>res.sendStatus(400).json()); 
        }
        else res.sendStatus(403).json(); 
        
    }) 

}
exports.editTask = async (req, res, next) =>{
    const {task, description} = req.body; 
    const taskId = req.params.id; 
    const author = req.user; 
    const date = getDate()

    await taskModel.findById(taskId)
    .then(item =>{
        if(item.author.toString() === author){
            item.updateOne(({task, description, date}), {new: true})
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
    
    await taskModel.find({author: userId})
    .then((item) => res.status(200).json(item))
    .catch(()=>res.SendStatus(400).json()); 
}