import express from "express";
import { testUser } from "../controllers/userControllers.js";
import testUserMiddleware from "../validation/validations.js";

const router = express.Router();

router.get("/", testUserMiddleware, testUser);

export default router;
