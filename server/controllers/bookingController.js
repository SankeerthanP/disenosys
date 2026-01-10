const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');




const addBooking = asyncHandler(async (req, res) => {
    const { courseId, type } = req.body;

    const booking = new Booking({
        user: req.user._id,
        course: courseId, 
        type: type || 'Course Application',
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
});




const getBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({})
        .populate('user', 'id name email')
        .populate('course', 'title category');
    res.json(bookings);
});




const getMyUserBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
        .populate('course', 'title category image')
        .sort('-createdAt');
    res.json(bookings);
});




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
