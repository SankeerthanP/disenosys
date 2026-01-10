const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const renameAdmin = async () => {
    try {
        const email = 'final@example.com';
        const user = await User.findOne({ email });

        if (user) {
            user.name = 'Admin';
            await user.save();
            console.log('Admin user renamed to "Admin"');
        } else {
            console.log('Admin user not found');
        }
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

renameAdmin();
