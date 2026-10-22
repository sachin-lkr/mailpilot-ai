import express from "express";
import { Router } from "express";
import {registerUser,verifyOTP,loginUser,logout} from "../controllers/authControllers.js"

//  create  Router ka instance
const router = Router();

// Register user
router.post(`/register`,registerUser);

// Login user

router.post(`/login`,loginUser);

//verify OTP

router.post(`/verify-otp`,verifyOTP);

// Logout
router.post(`/logout`,logout);

export default router