import express from "express"
import { Router } from "express";
import { generateEmail } from "../controllers/aiControllers.js";
import isAuthenticated from "../middleware/isAuthenticated.js"

//  create  Router's instance
const router = Router();
router.post('/generate-email', isAuthenticated, generateEmail);

export default router;
