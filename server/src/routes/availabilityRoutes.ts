import express from "express";
import { getAvailability, updateAvailability } from "../controllers/availabilityController.js";

const router = express.Router();

router.get("/", getAvailability);
router.post("/:roomId", updateAvailability);

export default router;