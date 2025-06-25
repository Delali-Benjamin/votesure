// Cleaned app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(cors());
app.use(express.json());
const voteRoutes = require("./routes/vote.routes");
app.use("/api/vote", voteRoutes);

//Register all /api/auth routes
app.use("/api/auth", authRoutes);

// Optional health check route
app.get("/", (req, res) => {
  res.send("VoteSure API is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
