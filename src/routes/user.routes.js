import { Router } from "express";
import {loginUser,registerUser, logoutUser,refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount:1
        },
        {
            name: "coverImage",
            maxCount:1
        }
    ]),
    registerUser)


router.route("/login").post(loginUser)  

//secured routes
router.route("/logout").get(logoutUser)
router.route("/logout").post(logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
export default router