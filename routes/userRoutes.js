import express from "express";
import { testUser } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", testUser);

export default router;
