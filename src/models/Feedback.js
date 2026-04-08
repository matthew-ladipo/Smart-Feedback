const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    content: { type: String, required: true },
    sentimentScore: { type: Number },
    sentimentLabel: { type: String }, // e.g., "Positive", "Negative", "Neutral"
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);