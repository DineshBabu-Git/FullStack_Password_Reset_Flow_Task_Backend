
const nodemailer = require("nodemailer");

const sendEmail = async (email, link) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    await transporter.sendMail({
        to: email,
        subject: "Password Reset Link",
        html: `<h3>Password Reset</h3>
      <p>Click the link below to reset your password:</p>
      <a href="${link}">${link}</a>
      <p>This link will expire in 15 minutes.</p>`
    });
};

module.exports = sendEmail;
