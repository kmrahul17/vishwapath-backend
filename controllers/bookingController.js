const Booking = require('../models/Booking');

// Create a booking
const createBooking = async (req, res) => {
    const { fromLocation, toLocation, journeyDate, vehicle, duration, price } = req.body;

    try {
        const booking = await Booking.create({
            userId: req.user.id,
            fromLocation,
            toLocation,
            journeyDate,
            vehicle,
            duration,
            price,
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user bookings
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createBooking, getBookings };
