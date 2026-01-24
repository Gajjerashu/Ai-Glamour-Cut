// models/Booking.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    service: { type: String, required: true },
    servicePrice: String,
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);