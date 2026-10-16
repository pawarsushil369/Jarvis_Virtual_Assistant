import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// ... your other imports

const app = express();

app.use(cors({
  origin: true, // Allows requests from any frontend origin (or put your frontend URL here)
  credentials: true
}));

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// 1. Add this root route so visiting your Render URL doesn't give a 404
app.get("/", (req, res) => {
  res.send("Jarvis Virtual Assistant Backend is running successfully!");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
    connectDb();
    console.log(`Server started on port ${port}`);
});