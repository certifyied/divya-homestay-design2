import express from "express";
import { createExperience, deleteExperience, getAllExperiences, getSingleExperience, updateExperience } from "../controllers/adminExperienceController.js";
import adminAuth from "../middleware/adminAuth.js"; // ✅ FIXED
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/add-experience", adminAuth, upload.single("image"), createExperience);
router.put("/update-experience/:id", adminAuth, upload.single("image"), updateExperience);
router.delete("/delete-experience/:id", deleteExperience);
router.get("/experiences", getAllExperiences);
router.get("/experience/:id", getSingleExperience);

export default router;