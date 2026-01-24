const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const twilio = require('twilio');

router.post('/add', async (req, res) => {
    try {
        const { customerName, phone, service, date, time, servicePrice, email } = req.body;

        // ૧. પેલા MongoDB માં ડેટા સેવ કરો
        const newBooking = new Booking({
            customerName, email, phone, date, time, service, servicePrice
        });
        await newBooking.save();

        // ૨. WhatsApp મોકલવાનો ટ્રાય કરો (try-catch ની અંદર જેથી સર્વર ક્રેશ ન થાય)
        try {
            const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
            const formattedPhone = phone.startsWith('+') ? phone : `+91${phone}`;

            await client.messages.create({
                from: 'whatsapp:+14155238886', // Twilio Sandbox Number
                to: `whatsapp:${formattedPhone}`,
                body: `नमस्ते ${customerName}! Glamour Cutz માં તમારું Appointment ${date} એ ${time} વાગ્યે કન્ફર્મ થયું છે. ✨`
            });
            console.log("WhatsApp message sent!");
        } catch (twilioErr) {
            console.error("WhatsApp Error (Skipped):", twilioErr.message);
        }

        // ૩. ગમે તે થાય, ફ્રન્ટએન્ડ ને સક્સેસ મોકલો
        res.status(201).json({ success: true, message: "Booking Done!" });

    } catch (err) {
        console.error("Database Error:", err.message);
        res.status(500).json({ success: false, error: "Server Error" });
    }
});


// બધા બુકિંગ્સ મેળવવા માટે (Admin Panel માટે)
router.get('/', async (req, res) => {
    try {
        const allBookings = await Booking.find().sort({ createdAt: -1 }); // નવા બુકિંગ્સ પહેલા દેખાશે
        res.status(200).json(allBookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;