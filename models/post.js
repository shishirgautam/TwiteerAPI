const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    like: {
        type: String,
        required: true
    },
    retweet: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Post', postSchema);