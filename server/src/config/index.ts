import dotenv from "dotenv";
import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

import connectDB from "../config/db.js"; // ✅ fix path (no .ts)
import router from "../routes/adminRoutes.js";
import availabilityRoutes from "../routes/availabilityRoutes.js";
import adminExperienceRoutes from "../routes/adminExperienceRoutes.js";

import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();

// app.use(
//   cors({
//     origin: ["https://pendoraglamps.com", "http://localhost:8080"],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"]
//   })
// );

app.use(
  cors({
    origin: [
      "https://pendoraglamps.com",
      "https://www.pendoraglamps.com",
      "http://localhost:8080"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.use("/api/admin", router);
app.use("/api/admin/availability", availabilityRoutes);
app.use("/api/admin", adminExperienceRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});