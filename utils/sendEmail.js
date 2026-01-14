
const axios = require("axios");

const sendEmail = async (email, resetLink) => {
    try {
        await axios.post(
            "https://api.resend.com/emails",
            {
                from: "Password Reset <onboarding@resend.dev>",
                to: email,
                subject: "Password Reset Link",
                html: `
          <p>You requested a password reset.</p>
          <p>Click the link below to reset your password:</p>
          <a href="${resetLink}">${resetLink}</a>
          <p>This link expires in 15 minutes.</p>
        `
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log(`Password reset email sent to ${email}`);
        return true;
    } catch (error) {
        console.error(
            "Resend email failed:",
            error.response?.data || error.message
        );
        return false;
    }
};

module.exports = sendEmail;
