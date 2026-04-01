<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=CodeConnect%20%F0%9F%9A%80&fontSize=80&animation=fadeIn&fontAlignY=38&desc=Tinder%20for%20Developers%20%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB&descAlignY=51&descAlign=62" alt="CodeConnect Header" />
  
  <p>
    <strong>CodeConnect is the ultimate platform for developers to connect, collaborate, and code together.</strong><br>
    Whether you're looking for a pair programming partner, a mentor, or a hackathon teammate, CodeConnect helps you find the perfect match! 🤝
  </p>

  <p>
    <a href="#features"><img src="https://img.shields.io/badge/Features-Explore-blue?style=for-the-badge&logo=rocket" alt="Features"></a>
    <a href="#tech-stack"><img src="https://img.shields.io/badge/Tech_Stack-View-orange?style=for-the-badge&logo=react" alt="Tech Stack"></a>
    <a href="#getting-started"><img src="https://img.shields.io/badge/Getting_Started-Run_Locally-success?style=for-the-badge&logo=play" alt="Getting Started"></a>
  </p>
</div>

---

## 📂 Project Structure

The project is divided into two main parts:

```text
CodeConnect/
├── CodeConnect_Backend/   # Node.js & Express API ⚙️
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── models/        # Mongoose schemas (User, ConnectionRequest)
│   │   ├── routes/        # API Routes (auth, user, request, etc.)
│   │   ├── utils/         # Helpers (Socket.io, Validation)
│   │   └── app.js         # Main entry point
│   └── ...
│
└── CodeConnect_Fronted/   # React (Vite) Frontend 🎨
    ├── src/
    │   ├── components/    # Reusable UI components
    │   ├── lib/           # Utilities (axios, store)
    │   ├── App.jsx        # Main routing logic
    │   └── ...
    └── ...
```

<br>

## 🌟 Features

### 🔐 Authentication
- **Secure Login/Signup:** Standard email/password authentication using `bcrypt` and `JWT`.
- **Google OAuth:** One-click login with Google for seamless access.

### 🧠 Smart Feed Service
- **Intelligent Matching:** The feed algorithm filters out users you've already interacted with (ignored/interested/connected) and shows you fresh profiles.
- **Safe Data:** Only public profile information is shared; sensitive data is protected.

### 🤝 Connections
- **Send Requests:** Swipe right (Interested) or left (Ignore) on developer profiles.
- **Review Requests:** Accept or reject incoming connection requests.
- **My Connections:** View a list of all your accepted friends.

### 💬 Real-time Communication
- **Instant Chat:** Built with `Socket.io` and `Stream Chat SDK` for smooth, real-time messaging.
- **Video Calls:** Integrated `Stream Video SDK` for high-quality video calls directly within the app.

<br>

## 🛠️ Tech Stack

### Frontend 🎨
| Technology | Description |
| :--- | :--- |
| **React (Vite)** ⚛️ | Fast and modern UI library |
| **TailwindCSS** 💅 | Utility-first CSS framework |
| **Redux Toolkit** 🔄 | State management |
| **Stream SDK** 📹 | Chat & Video infrastructure |

### Backend ⚙️
| Technology | Description |
| :--- | :--- |
| **Node.js** 🚂 | JavaScript runtime |
| **Express.js** ⚡ | Web framework |
| **MongoDB** 🍃 | NoSQL Database |
| **Socket.io** 🔌 | Real-time event-based communication |

<br>

## 🚀 Getting Started

Follow these simple steps to get CodeConnect running locally on your laptop!

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Cloud URI

### 1. Clone the Repository 📥
```bash
git clone <repository-url>
cd CodeConnect
```

### 2. Backend Setup ⚙️
Navigate to the backend directory:
```bash
cd CodeConnect_Backend
```
Install dependencies:
```bash
npm install
```
Configure Environment Variables:
Create a `.env` file in `CodeConnect_Backend/` (use `.env.example` as a reference):
```env
PORT=7777
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup 🎨
Open a **new terminal tab/window**, then navigate to the frontend directory:
```bash
cd ../CodeConnect_Fronted
```
Install dependencies:
```bash
npm install
```
Start the React app:
```bash
npm run dev
```

### 4. Enjoy! 🎉
Open your browser at `http://localhost:5173` (or the port shown in your terminal) and start connecting with amazing developers!

<br>

## 🔗 API Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/signup` | Register a new user |
| `POST` | `/login` | Authenticate user |
| `GET` | `/feed` | Get potential matches |
| `POST` | `/request/send/:status/:userId` | Send connection request |
| `POST` | `/request/review/:status/:requestId` | Review received request |

<br>

## 📄 License

This project is licensed under the ISC License.

---
<div align="center">
  <b>Assignment made with ❤️ by Manokamna.</b><br>
  <i>Happy Coding! 🚀</i>
</div>
