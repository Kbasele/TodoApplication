const mongoose = require('mongoose'); 
const moment = require('moment')
const Schema = mongoose.Schema; 

const date = moment()
const dateNow = date.format('MMMM Do YYYY, h:mm:ss a')

const TaskSchema = new Schema ({
    task:{
        type: String, 
        required: true 
    },
    description: {
        type: String, 
        required: true
    }, 
    author:{
        type: Schema.Types.ObjectId, ref:'User',
        required: true
    },
    date: {
        type: String, 
        default: dateNow
    }
}); 

module.exports = mongoose.model('Task', TaskSchema);