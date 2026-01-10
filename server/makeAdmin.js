const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const fs = require('fs');

const makeAdmin = async () => {
    try {
        const email = 'final@example.com';
        const user = await User.findOne({ email });

        if (user) {
            user.isAdmin = true;
            await user.save();
            console.log(`User ${user.name} is now an Admin`);
            process.exit();
        } else {
            console.log('User not found');
            fs.writeFileSync('admin_error.txt', 'User not found');
            process.exit(1);
        }
    } catch (error) {
        console.error(error);
        fs.writeFileSync('admin_error.txt', error.toString());
        process.exit(1);
    }
};

makeAdmin();
