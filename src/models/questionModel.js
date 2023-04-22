import mongoose from 'mongoose';

const questionModel = new mongoose.Schema({
    title: String,
    difficulty: String,
    acceptance: Number
})

module.exports = mongoose.models.questions || mongoose.model('questions', questionModel)