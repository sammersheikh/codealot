const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})


const postSchema = new Schema({
    category: {
        type: String,
    },
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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
    userAvatar: String,
    comments: [commentSchema],
 }, {
        timestamps: true
})



module.exports = mongoose.model('Post', postSchema)