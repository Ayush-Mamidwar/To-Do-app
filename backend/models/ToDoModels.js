const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    task: {type: String, require: true}
}) 


const ToDO = mongoose.model('ToDo',toDoSchema)

module.exports = ToDO