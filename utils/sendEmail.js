
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, resetLink) => {
    try {
        await sgMail.send({
            to: email, // ANY USER EMAIL
            from: process.env.SENDGRID_SENDER_EMAIL, // VERIFIED EMAIL
            subject: "Password Reset Link",
            html: `
        <h4>You requested a password reset.</h4>
        <p>Click the link below:</p>
        <h4><a href="${resetLink}" target="_blank"><u>Password Reset link</u></a></h4>
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
