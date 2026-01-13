
const axios = require("axios");

const sendEmail = async (email, resetLink) => {
    try {
        const response = await axios.post(
            "https://send.api.mailtrap.io/api/send",
            {
                from: {
                    email: process.env.MAILTRAP_SENDER,
                    name: "Password Reset App"
                },
                to: [
                    {
                        email: email
                    }
                ],
                subject: "Reset Your Password",
                html: `
                    <h3>Password Reset Request</h3>
                    <p>You requested to reset your password.</p>
                    <p>
                        <a href="${resetLink}" target="_blank">
                            Click here to reset your password
                        </a>
                    </p>
                    <p>This link will expire in 15 minutes.</p>
                `
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.status === 200;

    } catch (error) {
        console.error(
            "Email sending failed:",
            error.response?.data || error.message
        );
        return false;
    }
};

module.exports = sendEmail;
