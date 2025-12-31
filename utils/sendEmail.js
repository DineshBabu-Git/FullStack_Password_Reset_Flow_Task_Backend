
const nodemailer = require("nodemailer");

const sendEmail = async (email, link) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Password Reset Link",
            html: `
        <p>You requested a password reset from NodeJs Password Reset Flow.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${link}">${link}</a>
        <p>This link expires in 15 minutes.</p>
      `
        });

        return true;

    } catch (error) {
        console.error("Email sending failed:", error.message);
        return false;
    }
};

module.exports = sendEmail;
