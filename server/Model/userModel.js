const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    course:String
})
User = mongoose.model('User',UserSchema)
module.exports = User