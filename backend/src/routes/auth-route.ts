import express from "express";
import { getMe , authCallback } from "../controllers/auth-controller";
import { protectRoute } from "../middleware/auth";

const router = express.Router();



router.get("/me", protectRoute, getMe)
router.post("/callback", authCallback)



export default router