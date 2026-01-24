const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // .env ફાઇલમાંથી વિગતો લેવા માટે

// Routes Import
const heroRoutes = require('./routes/hero');
const statsRoutes = require('./routes/stats');
const serviceRoutes = require('./routes/services');
const bookingRoutes = require('./routes/bookings');
const feedRoutes = require('./routes/feed');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// નોધ: પ્રોડક્શનમાં process.env.MONGO_URI વાપરવું વધુ સારું છે
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/saloonDB';
mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// API Routes Register
app.use('/api/hero', heroRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes); // બુકિંગ અને મેસેજ લોજિક અહીં છે
app.use('/api/feedback', feedRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send("Hair Saloon Backend is Running with WhatsApp Automation...");
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});