import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Test API route
app.get("/api/test", (req, res) => {
  res.json({
    message: "API is Live and Connected!",
    status: 200
  });
});

// Default route
app.get("/", (req, res) => {
  res.send("Backend Server is Running 🚀");
});

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
