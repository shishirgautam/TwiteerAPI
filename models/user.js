const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
  
  
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    email:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('User', userSchema);