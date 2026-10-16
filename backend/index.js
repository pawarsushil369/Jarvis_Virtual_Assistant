import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import geminiResponse from "./gemini.js";

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Root route to fix the 404 error when visiting your URL
app.get("/", (req, res) => {
  res.send("Jarvis Virtual Assistant Backend is running successfully!");
});

// Your user routes
app.use("/api/user", userRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});