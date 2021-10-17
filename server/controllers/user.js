const UserModel = require("../models/UserModel")
const bcrypt = require('bcrypt')
const salt = Number(process.env.SALT);



exports.createUser = async (req, res, next) =>{

    const {userName, password} = req.body
        //checks if user exists and if not create new user with hashed password    
        const user = await UserModel.exists({userName: userName})
        
        if(!user){
            bcrypt.hash(password, salt, (err, hash)=>{
                if(err) res.status(500); 
                else{
                    const newUser = new UserModel({userName, password: hash})

                    newUser.save()
                    .then(item => res.status(200).json(item))
                    .catch((err)=>{
                        res.status(400).json({ msg: err.message });
                    });
                }
            })

        }
        else {res.status(400).json("USER ALREADY EXISTS")}
        
}
