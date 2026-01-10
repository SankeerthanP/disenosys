const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
const addBooking = asyncHandler(async (req, res) => {
    const { courseId, type } = req.body;

    const booking = new Booking({
        user: req.user._id,
        course: courseId, // Can be null for general demos
        type: type || 'Course Application',
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
});

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private/Admin
const getBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({})
        .populate('user', 'id name email')
        .populate('course', 'title category');
    res.json(bookings);
});

// @desc    Get logged in user bookings
// @route   GET /api/bookings/mybookings
// @access  Private
const getMyUserBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
        .populate('course', 'title category image')
        .sort('-createdAt');
    res.json(bookings);
});

// @desc    Update booking status
// @route   PUT /api/bookings/:id/status
// @access  Private/Admin
const updateBookingStatus = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
        booking.status = req.body.status || booking.status;
        const updatedBooking = await booking.save();
        res.json(updatedBooking);
    } else {
        res.status(404);
        throw new Error('Booking not found');
    }
});

module.exports = { addBooking, getBookings, getMyUserBookings, updateBookingStatus };
