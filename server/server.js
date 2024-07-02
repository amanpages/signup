const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser()); 
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI,)
    .then(() => console.log('MongoDB Atlas connected'))
    .catch(err => console.log('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
});

const User = mongoose.model('User', userSchema);

// Routes// Routes
app.post('/api/signup', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the new user
        const newUser = new User({ fullName, email, password: hashedPassword });
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set the token in a cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});