const asyncHandler = require('express-async-handler');
const Course = require('../models/Course');




const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    res.json(courses);
});




const getCourseById = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        res.json(course);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});




const createCourse = asyncHandler(async (req, res) => {
    const { title, description, category, price, image } = req.body;

    const course = new Course({
        title,
        description,
        category,
        price,
        image
    });

    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
});




const updateCourse = asyncHandler(async (req, res) => {
    const { title, description, category, price, image } = req.body;

    const course = await Course.findById(req.params.id);

    if (course) {
        course.title = title || course.title;
        course.description = description || course.description;
        course.category = category || course.category;
        course.price = price || course.price;
        course.image = image || course.image;

        const updatedCourse = await course.save();
        res.json(updatedCourse);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});




const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        await course.deleteOne();
        res.json({ message: 'Course removed' });
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
};
