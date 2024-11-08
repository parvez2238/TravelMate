// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');
require('dotenv').config();

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token, message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Find the user with the provided email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Generate a JWT token for password reset (expires in 15 minutes)
      const resetToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });
  
      // Create the password reset URL with the token embedded in it
      const resetURL = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
  
      // Send password reset email with the link
      await sendEmail({
        to: user.email,
        subject: 'Password Reset',
        text: `You requested a password reset. Click the link below to reset your password: \n\n${resetURL}`,
      });
  
      // Return success message
      res.json({ message: 'Password reset email sent' });
    } catch (error) {
      // Return error message if something goes wrong
      res.status(500).json({ message: error.message });
    }
  };
