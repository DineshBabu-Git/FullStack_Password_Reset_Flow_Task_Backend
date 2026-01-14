
# 🔐 Password Reset Flow – Full Stack Application

This is a FullStack web application implementing a secure password reset flow with email verification, built using React, Node.js, Express, MongoDB, and styled with TailwindCSS.

This project demonstrates real-world authentication flows including user registration, login, forgot password, email-based password reset with expiry, and secure password storage. This Includes real-world email-based password recovery using SendGrid.

-----------------------------------------------------------------------------------

## Features

- User Registration and Login
- Secure Login with hashed passwords
- Forgot Password with Email Verification
- Secure password reset link with expiry
- Token validation & cleanup after reset
- Fully responsive UI
- Clean MVC backend architecture
- Proper error handling (frontend & backend)

-----------------------------------------------------------------------------------

## Tech Stack

- **Frontend**: React (Vite), TailwindCSS, React Router DOM

- **Backend**: Node.js, Express, MongoDB (Mongoose), SendGrid (Transactional Emails), bcrypt (Password hashing), crypto (Secure token generation)

-----------------------------------------------------------------------------------

## Email Service Note (Important)

**⚠️ Why SendGrid is Used Instead of Gmail**

Gmail SMTP is blocked on Render free tier, which causes email timeouts and 500 server error in production even after setting an Gmail App Password as well as 2-step Verification.

✅ So here SendGrid Email API is used instead for reliable testing and deployment which making it perfect for development and demo purposes.

-----------------------------------------------------------------------------------

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd password-reset-flow-task
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create `.env` file in `backend/` with MongoDB URI, email credentials, etc.

5. Start the backend:
   ```bash
   cd backend
   npm start
   ```
   Backend runs at --> `http://localhost:5000`

6. Start the frontend:
   ```bash
   cd ../frontend
   npm run dev
   ```
   Frontend runs at --> `http://localhost:5173`

-----------------------------------------------------------------------------------

## Environment Variables

**Backend .env (not committed):**

- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- SENDGRID_API_KEY=your_sendgrid_api_key
- FROM_EMAIL=your_verified_sender_email
- FRONTEND_URL=http://localhost:5173

**Frontend .env (not committed):**

- VITE_API_URL=http://localhost:5000

-----------------------------------------------------------------------------------

## Deployment

- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas
- Email Service: SendGrid (A leading cloud-based email delivery platform)

Environment variables are configured directly in Render and Netlify dashboards.

-----------------------------------------------------------------------------------

## License

This project is open-source and free to use for educational and personal projects.

------------------------------------------------------------------------------------
