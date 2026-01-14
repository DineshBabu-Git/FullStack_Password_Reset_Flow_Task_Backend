
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, resetLink) => {
    try {
        await sgMail.send({
            to: email, // ANY USER EMAIL
            from: process.env.SENDGRID_SENDER_EMAIL, // VERIFIED EMAIL
            subject: "Password Reset Link",
            html: `
        <p>You requested a password reset.</p>
        <p>Click the link below:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link expires in 15 minutes.</p>
      `
        });

        console.log("Email sent to:", email);
        return true;
    } catch (error) {
        console.error("SendGrid Email Error:", error.message);
        return false;
    }
};

module.exports = sendEmail;
