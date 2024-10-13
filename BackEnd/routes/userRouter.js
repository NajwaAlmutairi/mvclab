import express from "express";
import mongoose from "mongoose";
import { addbook } from "../controller/bookController.js";
import { authenticateToken, login, register, userById } from "../controller/userController.js";


const router = express.Router();

//signin
router.post("/register",register);

//login
router.post("/login", login);

// add new book
router.post("/addNewBooks", authenticateToken,addbook);

//get by userId
router.get("/user/:id",userById);

export default router;