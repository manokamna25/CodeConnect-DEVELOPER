require('dotenv').config();
const express = require('express');
const connectDB = require("./config/database")
const app = express() //INSANCE OF EXPRESS

const cors = require("cors")

const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")

app.use(express.json());
app.use(cookieParser());

// 1. Debug Logging (Top Priority)
app.use((req, res, next) => {
    console.log(`--> Received ${req.method} request at ${req.url}`);
    console.log("Origin:", req.headers.origin);
    next();
});

// 2. CORS Configuration (Single Source of Truth)
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
}));

// 3. Health Check Route
app.get("/", (req, res) => {
    res.send("Backend is running! Status: OK");
});

const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request")
const userRouter = require("./routes/user");
const paymentRouter = require('./routes/payment');
const chatRouter = require("./routes/chat");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/", paymentRouter);
app.use("/", chatRouter);

const http = require("http");
const server = http.createServer(app);
const initializeSocket = require("./utils/socket");
initializeSocket(server);


connectDB().then(() => {
    console.log("database connection successfull")
    const PORT = process.env.PORT || 7777;
    server.listen(PORT, () => {
        console.log(`server is successfully listing on port ${PORT}`)
    })
}).catch(err => {
    console.log("database cannot be connected")
}) 