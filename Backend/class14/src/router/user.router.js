const express=require("express")
const userController=require("../controller/user.controller")
const identifyRouter=require("../middlewares/auth.middleware")

const userRouter=express.Router()

userRouter.post("/follow/:username",identifyRouter,userController.followUserController)
userRouter.post("/unfollow/:username",identifyRouter,userController.unfollowUserController)



module.exports=userRouter