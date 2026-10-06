import dotenv from "dotenv";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import router from "./routes/adminRoutes.js";
import availabilityRoutes from "./routes/availabilityRoutes.js";
import adminExperienceRoutes from "./routes/adminExperienceRoutes.js";

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  "https://pendoraglamps.com",
  "https://www.pendoraglamps.com",
  "http://localhost:8080",
  "http://localhost:8081",
  "http://localhost:5173",
  "http://localhost:3000",
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (
      allowedOrigins.includes(origin) ||
      /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
    ) {
      return callback(null, origin);
    }
    return callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

// Enable CORS middleware
app.use(cors(corsOptions));

// Explicit preflight handler for OPTIONS requests across all routes
app.use((req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;
  if (
    !origin ||
    allowedOrigins.includes(origin) ||
    /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
  ) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

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
