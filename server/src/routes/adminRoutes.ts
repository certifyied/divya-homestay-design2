import express from "express";
import { adminLogout, changeAdminPassword, checkAdmin, getAdminProfile, loginAdmin, registerAdmin, updateAdminProfile } from "../controllers/adminController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

// ONLY signup route
router.post("/signup", registerAdmin);
router.post("/login", loginAdmin);
router.get("/check-admin", adminAuth, checkAdmin);
router.post("/admin-logout", adminLogout);
console.log("✅ AdminRoutes loaded");

router.get("/admin-profile", adminAuth, getAdminProfile);
router.put("/admin-profile/update", adminAuth, updateAdminProfile);
router.put("/admin-profile/change-password", adminAuth, changeAdminPassword);

export default router;
