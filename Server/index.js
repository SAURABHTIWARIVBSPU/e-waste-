const express = require("express");
const server = express();
const cors = require("cors");

const userRoutes = require("./routes/Users");
const orderRoutes = require("./routes/orderRoutes");

const database = require("./config/database");
const dotenv = require("dotenv");
 
dotenv.config();
const PORT = process.env.PORT || 4000;

// Database connection
database.connect();

server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:3000",                  // Allow frontend requests
    methods: "GET,POST,PUT,DELETE",                   // Allowed HTTP methods
    credentials: true,                                // Allow cookies/session
  })
);

// Routes
server.use("/api/v1/auth", userRoutes);
server.use("/api/v1/track", orderRoutes); // ✅ Fixed the error

// Default route
server.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is running up ....",
  });
});

server.listen(PORT, () => {
  console.log("App is running at", PORT);
});
