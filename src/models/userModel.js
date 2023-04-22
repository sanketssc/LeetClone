import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.models.user || mongoose.model('user', userModel, 'users');