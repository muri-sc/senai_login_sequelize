import { Router } from "express"
import * as authController from "../controller/auth.controller.js"

const authRouter = Router()

authRouter.post("/register", authController.createUserHandler)
authRouter.post("/login", authController.loginUserHandler)

export default authRouter