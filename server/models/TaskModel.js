const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

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
        type: Date, 
        default: new Date()
    }
}); 

module.exports = mongoose.model('Task', TaskSchema);