
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: [
            "https://password-reset-flow-task-frontend.netlify.app"
        ],
        methods: ["GET", "POST"],
        credentials: true
    })
);

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
