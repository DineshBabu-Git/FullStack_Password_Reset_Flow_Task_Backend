
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

// USER REGISTER
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        email,
        password: hashedPassword
    });

    await user.save();

    res.json({ message: "User registered successfully" });
};

// USER LOGIN
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
};

// FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save();

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    await sendEmail(email, resetLink);

    res.json({ message: "Reset link sent to Email" });
};

// VALIDATE TOKEN
exports.validateToken = async (req, res) => {
    const { token } = req.params;

    const user = await User.findOne({
        resetToken: token,
        resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
        return res.status(400).json({ message: "Invalid or Expired Token" });
    }

    res.json({ message: "Token Valid" });
};

// RESET PASSWORD
exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    const user = await User.findOne({
        resetToken: token,
        resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
        return res.status(400).json({ message: "Invalid or Expired Token" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = null;
    user.resetTokenExpiry = null;

    await user.save();

    res.json({ message: "Password Reset Successful" });
};
