const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    type: String,
})

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    },
    isSolved: {
        default: false,
    },
    comments: [commentSchema],
})



module.exports = mongoose.model('Post', postSchema)