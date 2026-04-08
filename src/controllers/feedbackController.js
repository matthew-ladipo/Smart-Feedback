const Feedback = require('../models/Feedback');
const { analyzeText } = require('../services/sentimentService');

exports.createFeedback = async (req, res) => {
    try {
        const { content } = req.body;
        const { score, label } = analyzeText(content);

        const newFeedback = await Feedback.create({
            content,
            sentimentScore: score,
            sentimentLabel: label
        });

        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(500).json({ message: 'Error saving feedback' });
    }
};

exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching feedback' });
    }
};