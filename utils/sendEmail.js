
const nodemailer = require("nodemailer");

const sendEmail = async (email, resetLink) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Reset Your Password",
            html: `
        <p>You requested to reset your password.</p>
        <p>Click the link below to reset your password:</p>
        <p><a href="${resetLink}">Click here to reset your password</a></p>
        <p>This link will expire in 15 minutes.</p>`
        });

        return true;

    } catch (error) {
        console.error("Email sending failed:", error);
        return false;
    }
};

module.exports = sendEmail;
