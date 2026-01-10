const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Placeholder for when user provides URI
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/disenosys_clone');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // Do not exit process in dev if DB fails, just log
        // process.exit(1); 
    }
};

module.exports = connectDB;
