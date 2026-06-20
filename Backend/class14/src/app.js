const express=require("express")
const cookieParser=require("cookie-parser")
const app=express();


const authRouter=require("./router/auth.router");
const postRouter = require("./router/post.routeer");
const userRouter=require("./router/user.router")


app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)
app.use("/api/user",userRouter)

module.exports=app