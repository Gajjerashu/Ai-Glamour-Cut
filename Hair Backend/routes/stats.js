const express = require('express');
const router = express.Router();
const Stats = require('../models/Stats');

// GET: Fetch stats for frontend
router.get('/', async (req, res) => {
    try {
        const stats = await Stats.findOne();
        res.json(stats || { stylists: "15+", clients: "10k+", locations: "5", accuracy: "100%" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Update stats from Admin Panel
router.post('/update', async (req, res) => {
    try {
        const { stylists, clients, locations, accuracy } = req.body;
        let stats = await Stats.findOne();
        if (stats) {
            stats.stylists = stylists;
            stats.clients = clients;
            stats.locations = locations;
            stats.accuracy = accuracy;
            await stats.save();
        } else {
            stats = new Stats({ stylists, clients, locations, accuracy });
            await stats.save();
        }
        res.json({ message: "Stats updated!", data: stats });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;