const UserModel = require("../models/UserModel")
const bcrypt = require('bcrypt')
const salt = Number(process.env.SALT);
const {createToken} = require('../utils/createToken')

exports.createUser = async (req, res, next) =>{

    const {userName, password} = req.body
        //checks if user exists and if not create new user with hashed password    
        const user = await UserModel.exists({userName: userName})
        
        if(!user){
            bcrypt.hash(password, salt, (err, hash)=>{
                if(err) res.sendStatus(500); 
                else{
                    const newUser = new UserModel({userName, password: hash})

                    newUser.save()
                    .then(item => res.sendStatus(201).json())
                    .catch(err=>res.sendStatus(400).json());
                }
            })

        }
        else {res.status(400).json("USER ALREADY EXISTS")}
        
}

exports.getUser = async (req, res, next) =>{
    const {userId} = req.body; 

    try{
        await UserModel.findById(userId)
        .then(user => {
            res.sendStatus(200).json(user);
        }); 

    } catch{
        res.sendStatus(400).json("could not found user"); 
    }; 

}; 

exports.loginUser = async (req, res, next) =>{
    const {userName, password} = req.body; 

    const user = await UserModel.findOne({userName})

    if(user){
        bcrypt.compare(password, user.password, (err, match) => {
            if(err) res.status(403).json("WRONG EMAIL OR PASSWORD")
            if(match) res.status(200).json(createToken(user.id))
            else res.status(403).json("WRONG EMAIL OR PASSWORD")
          });
    } else{
        res.status(403).json("WRONG EMAIL OR PASSWORD")
    }
}