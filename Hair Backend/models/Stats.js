const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    stylists: { type: String, default: "15+" },
    clients: { type: String, default: "10k+" },
    locations: { type: String, default: "5" },
    accuracy: { type: String, default: "100%" }
}, { timestamps: true });

module.exports = mongoose.model('Stats', statsSchema);