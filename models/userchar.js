const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and model
const UserCharSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        
        required: true
    },
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
    }

});

const UserChar = mongoose.model('userchar',UserCharSchema);
module.exports = UserChar;