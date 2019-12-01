const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    favorites: {
        type: [Schema.Types.ObjectId],
        ref: 'Recipe',
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'cupdated_at',
    }
})

module.exports = model("User", UserSchema)