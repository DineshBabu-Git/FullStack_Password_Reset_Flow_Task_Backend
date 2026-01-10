
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

## Email Service Note (Important)

**⚠️ Why Mailtrap is Used Instead of Gmail**

Gmail SMTP is blocked on Render free tier due to its new updated policies, which causes email timeouts and 500 server error in production even after setting an Gmail App Password as well as 2-step Verification.

✅ Mailtrap SMTP is used instead for reliable testing and deployment.
Mailtrap captures emails in a sandbox inbox, making it perfect for development and demo purposes.

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

- MONGO_URI=your_mongodb_uri
- MAILTRAP_HOST=your_mailtrap_host
- MAILTRAP_PORT=your_mailtrap_port
- MAILTRAP_USER=your_mailtrap_user
- MAILTRAP_PASS=your_mailtrap_password
- EMAIL=your_email_address (for sending emails)
- FRONTEND_URL=http://localhost:5173

**Frontend .env (not committed):**

- VITE_API_URL=http://localhost:5000

-----------------------------------------------------------------------------------

## Deployment

- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas
- Email Service: Mailtrap (SMTP)

Environment variables are configured directly in Render and Netlify dashboards.

-----------------------------------------------------------------------------------

## License

This project is open-source and free to use for educational and personal projects.

------------------------------------------------------------------------------------
