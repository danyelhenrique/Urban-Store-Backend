const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true
    },
    created_At: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    username: {
        type: String,
    }
})

module.exports = model("Recipe", RecipeSchema)