const express = require('express');
const router = express.Router();
const Hero = require('../models/Hero');

// GET: Fetch content for Hero.jsx
router.get('/', async (req, res) => {
    try {
        const data = await Hero.findOne();
        // Jo database khali hoy to default data mokalshe
        res.json(data || {
            offer: "AI-Powered Grooming",
            title: "Redefine Your Look",
            subtitle: "With Precision"
        });
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

// POST: Update content from Admin Panel
router.post('/update', async (req, res) => {
    try {
        const { offer, title, subtitle } = req.body;
        let content = await Hero.findOne();

        if (content) {
            content.offer = offer;
            content.title = title;
            content.subtitle = subtitle;
            await content.save();
        } else {
            content = new Hero({ offer, title, subtitle });
            await content.save();
        }
        res.json({ message: "Hero Section Updated!", data: content });
    } catch (err) {
        res.status(500).json({ message: "Update Failed", error: err.message });
    }
});

module.exports = router;