import { Router } from "express"
import * as userController from "../controller/user.controller.js"
import isAuthenticated from "../middlewares/auth.middleware.js"

const userRouter = Router()

userRouter.get("/profile", isAuthenticated, userController.getProfileHandler)
userRouter.put("/profile", isAuthenticated, userController.updateProfileHandler)
userRouter.delete("/account", isAuthenticated, userController.deleteAccountHandler)

export default userRouter