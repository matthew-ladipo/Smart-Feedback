const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const analyzeText = (text) => {
    const analysis = sentiment.analyze(text);
    let label = 'Neutral';
    if (analysis.score > 0) label = 'Positive';
    if (analysis.score < 0) label = 'Negative';

    return {
        score: analysis.score,
        label: label
    };
};

module.exports = { analyzeText };