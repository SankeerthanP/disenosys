const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: false, 
        ref: 'Course',
    },
    type: {
        type: String,
        required: true,
        enum: ['Course Application', 'Demo Request'],
        default: 'Course Application'
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
}, {
    timestamps: true,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
