const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');

dotenv.config();


connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/courses', courseRoutes);
app.use('/api/users', require('./routes/userRoutes'));
app.get('/api/seed', async (req, res) => {
    const Course = require('./models/Course');
    const courses = [
        {
            title: "PG Diploma in Plastic Trims Design",
            category: "PG Diploma",
            price: "1,50,000",
            students: "5,957",
            image: "/assets/plastic (2).webp",
            description: "Master the art of automotive plastic trims, from design to manufacturing standards.",
            type: "PG"
        },
        {
            title: "PG Diploma in BIW Design",
            category: "PG Diploma",
            price: "1,50,000",
            students: "4,230",
            image: "/assets/BIW.webp",
            description: "Comprehensive training in Body-in-White design, a critical aspect of automotive engineering.",
            type: "PG"
        },
        {
            title: "Masters in Automotive Body Design",
            category: "Masters",
            price: "2,00,000",
            students: "6,100",
            image: "/assets/cad (1).webp",
            description: "An advanced master's program covering all aspects of automotive body engineering.",
            type: "PG"
        },
        {
            title: "Foundations for Automotive Designers",
            category: "Automobile Engineering",
            price: "4,999",
            students: "1.2k",
            image: "/assets/course_1.jpg",
            description: "Master the basics of automotive design, including chassis, engine, and suspension systems.",
            rating: 4.5,
            reviews: 120,
            duration: "6 Weeks",
            type: "Online"
        },
        {
            title: "Advanced CATIA Surface",
            category: "Mechanical Engineering",
            price: "4,999",
            students: "850",
            image: "/assets/course_2.jpg",
            description: "Learn complex surface modeling techniques used in top-tier automotive companies with CATIA.",
            rating: 4.8,
            reviews: 85,
            duration: "8 Weeks",
            type: "Online"
        },
        {
            title: "Plastic Trims Engineering",
            category: "Plastic Trims",
            price: "4,999",
            students: "2k",
            image: "/assets/course_3.jpg",
            description: "Deep dive into plastic interior and exterior trims, material selection, and manufacturing processes.",
            rating: 4.7,
            reviews: 200,
            duration: "10 Weeks",
            type: "Online"
        },
        {
            title: "BIW Fixture Design",
            category: "BIW",
            price: "4,999",
            students: "1.5k",
            image: "/assets/course_4.jpg",
            description: "Understand the principles of Body-in-White fixture design, clamping, and welding standards.",
            rating: 4.6,
            reviews: 150,
            duration: "12 Weeks",
            type: "Online"
        },
        {
            title: "Electric Vehicle Design",
            category: "Mechatronics Engineering",
            price: "4,999",
            students: "2.5k",
            image: "/assets/course_5.jpg",
            description: "Explore the future of mobility with comprehensive modules on EV battery packs, motors, and powertrains.",
            rating: 4.9,
            reviews: 300,
            duration: "14 Weeks",
            type: "Online"
        }
    ];
    await Course.deleteMany({});
    await Course.insertMany(courses);
    res.send('Seeded');
});

app.use('/api/bookings', require('./routes/bookingRoutes'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

// Trigger restart
