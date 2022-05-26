import express from "express";
import {register, login, logout} from "../controllers/authController.js";
const router = express.Router();

//here url starts from '/api/v1/auth

//1) register route
router.post('/register',register);

//2) login route
router.post('/login',login);

//3) logout route
router.get('/logout',logout);

export default router;