const express = require('express');
const router = express.Router();
const { addBooking, getBookings, getMyUserBookings, updateBookingStatus } = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, addBooking).get(protect, admin, getBookings);
router.route('/mybookings').get(protect, getMyUserBookings);
router.route('/:id/status').put(protect, admin, updateBookingStatus);

module.exports = router;
