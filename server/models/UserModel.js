const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    userName: {
        type: String, 
        required: true,
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'    }, 
    password: {
        type: String, 
        required: true, 

    }, 
});

module.exports = mongoose.model('User', UserSchema);