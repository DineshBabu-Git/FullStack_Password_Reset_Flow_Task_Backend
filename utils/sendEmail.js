
const nodemailer = require("nodemailer");

const sendEmail = async (email, link) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            to: email,
            subject: "Password Reset Link",
            html: `<h3>Password Reset Request Received</h3>
      <p>Click the link below to reset your password:</p>
      <a href="${link}">${link}</a>
      <p>This link will expire in 15 minutes.</p>`
        });

        return true;
    }
    catch (error) {
        console.error("Email error:", error.message);
        return false;
    }
};

module.exports = sendEmail;
