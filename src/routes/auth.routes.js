import { Router } from "express"
import { loginLimiter, registrationLimiter } from "../config/rate-limit.config.js"
import * as authController from "../controller/auth.controller.js"

const authRouter = Router()

authRouter.post("/register", registrationLimiter, authController.createUserHandler)
authRouter.post("/login", loginLimiter, authController.loginUserHandler)

export default authRouter