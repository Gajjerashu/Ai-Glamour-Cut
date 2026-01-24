const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feed');

// POST: Save Feedback
router.post('/add', async (req, res) => {
    try {
        const newFeed = new Feedback(req.body);
        await newFeed.save();
        res.status(201).json({ success: true, message: "Feedback Saved!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET: All Feedback for Admin
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json(err);
    }
});

// routes/feed.js ma aa add karo
router.delete('/:id', async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Feedback Deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;