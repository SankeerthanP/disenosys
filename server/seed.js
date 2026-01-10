const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const courses = [
    {
        title: "PG Diploma in Plastic Trims Design",
        description: "Master the art of automotive plastic trims, from design to manufacturing standards.",
        category: "PG Diploma",
        price: "₹ 1,50,000",
        students: "5,957 Students",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "PG Diploma in BIW Design",
        description: "Comprehensive training in Body-in-White design, a critical aspect of automotive engineering.",
        category: "PG Diploma",
        price: "₹ 1,50,000",
        students: "5,957 Students",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Masters in Automotive Body Design",
        description: "An advanced master's program covering all aspects of automotive body engineering.",
        category: "Masters",
        price: "₹ 2,50,000",
        students: "5,957 Students",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Automotive Sketching",
        description: "Learn the fundamentals of automotive sketching and design visualization.",
        category: "Online Course",
        price: "₹ 12,999",
        students: "2,000 Students",
        image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Catia V5 Fundamentals",
        description: "Master the basics of Catia V5, the industry standard for automotive design.",
        category: "Online Course",
        price: "₹ 15,999",
        students: "3,500 Students",
        image: "https://images.unsplash.com/photo-1626668893632-6f3d446b4b1a?auto=format&fit=crop&q=80&w=600"
    },
];

const importData = async () => {
    try {
        await Course.deleteMany();

        await Course.insertMany(courses);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
