
const nodemailer = require('nodemailer');

const sendEmail = async (email, resetLink) => {
    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset Request',
            html: `
                <h2>Password Reset Link</h2>
                <h3>You requested a password reset from NodeJs Password Reset Flow.<br>Click the link below to reset your password:</h3>
                <a href="${resetLink}">Reset Password</a>
                <p>This link will expire in 15 minutes.</p>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Password reset email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email could not be sent');
    }
};

module.exports = sendEmail;
