import express from "express";
import authMiddlewares from "../Middleware/AuthMiddleware.js";
import {
  forgotPassword,
  getUser,
  resetPassword,
  signinUser,
  signupUser,
} from "../Controllers/UserController.js";

const router = express.Router();

router.post("/signup-user", signupUser); //signup
router.post("/signin-user", signinUser); //signin
router.get("/get-user", authMiddlewares, getUser); // getting authorized user
router.post("/forgot-password", forgotPassword); //forgot password
router.post("/reset-password/:id/:token", resetPassword); //reset password

export default router;
