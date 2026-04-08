require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./src/config/db');
const feedbackRoutes = require('./src/routes/feedbackRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors({ 
  origin: 'https://smart-feedback-client.vercel.app',
  credentials: true 
}));
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server flying on port ${PORT}`));

