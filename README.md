
# 🔐 Password Reset Flow – Full Stack Application

This is a FullStack web application implementing a secure password reset flow with email verification, built using React, Node.js, Express, MongoDB, and styled with TailwindCSS.

This project demonstrates real-world authentication flows including user registration, login, forgot password, email-based password reset with expiry, and secure password storage.

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

- **Backend**: Node.js, Express, MongoDB (Mongoose), Nodemailer (Email service), bcrypt (Password hashing), crypto (Secure token generation)

- **Frontend**: React (Vite), TailwindCSS, React Router DOM

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

## License

This project is open-source and free to use for educational and personal projects.

-----------------------------------------------------------------------------------
