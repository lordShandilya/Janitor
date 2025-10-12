# Janitor – Smart Gate Pass System

Janitor is a digital gate pass application designed for colleges to simplify and automate the entry-exit process for students. It eliminates manual gate logging by enabling students to scan QR codes at gates to record exits and entries securely.

# Features

- College Email Sign-Up:
Students sign up using their verified college email addresses to ensure authenticity.

- JWT Authentication:
Uses secure JSON Web Tokens (JWT) for authentication. Tokens are stored on disk, allowing users to remain signed in across sessions.

- QR Code-Based Gate Scanning:
Each gate has a unique QR code that students can scan from within the app.

- Smart Exit & Entry Tracking:

- When a QR code is scanned for the first time, the app sends a request to the backend with the student’s roll number (user ID), creating a new exit record.

- When the student returns, scanning the same QR code again triggers another request to the API. The backend checks for any previous exit record without an entry_time and updates it, marking the student’s entry.

## Real-Time API Integration:
Seamless communication with the backend for instant record updates and responses.

# Tech Stack

- Frontend: React Native
- Backend: Node.js / Express (or specify your backend if different)
- Database: MongoDB / PostgreSQL (mention which you use)
- Auth: JWT-based authentication

# How It Works

- Sign Up / Sign In

- Register using your college email.

- Once logged in, your JWT is securely stored for future sessions.

- Scan to Exit

- Open the app → Tap on “Scan QR”.

- Scan the gate QR code to mark your exit.

- Scan to Re-Enter

- Upon returning, scan the same QR code again.

- The backend verifies your last exit record and logs your entry.

## Security Highlights

- College domain verification for sign-up.

- JWT tokens with expiry for secure authentication.

- API-level validation to prevent duplicate or invalid records.

# Future Enhancements (Planned)

- Admin dashboard for viewing student gate logs.

- Notifications for gate activity.

- Integration with campus ID systems.

- Analytics for entry-exit trends.


