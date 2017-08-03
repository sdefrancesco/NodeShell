var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    created_at: {
        type: Date
    }
})

module.exports = mongoose.model('Post', postSchema)