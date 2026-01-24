const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    offer: {
        type: String,
        default: "AI-Powered Grooming"
    },
    title: {
        type: String,
        default: "Redefine Your Look"
    },
    subtitle: {
        type: String,
        default: "With Precision"
    },
    // AI analysis mate future fields
    aiStatus: {
        type: String,
        default: "Ready"
    }
}, { timestamps: true });

module.exports = mongoose.model('HeroContent', heroSchema);