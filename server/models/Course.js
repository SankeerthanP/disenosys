const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    students: {
        type: String,
        default: "5,000+ Students"
    },
    type: {
        type: String,
        required: true,
        enum: ['PG', 'Online'],
        default: 'Online'
    },
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
