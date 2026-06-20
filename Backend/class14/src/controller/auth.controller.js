
const userModel = require("../model/user.model");

const crypto=require("crypto")

const jwt=require("jsonwebtoken")



async function registerController(req,res){
    const {email,username,password,bio,profilepic}=req.body;

    const isUseralreadyexist=await userModel.findOne({
        $or:[
            {email},
            {username}
        ]})
    
    if(isUseralreadyexist){
        return res.status(409).json({
            message:"user already exist"+(isUseralreadyexist.email==email?"email already exist":"username already registered")
        })
    }
        const hash = crypto.createHash('sha256').update(password).digest('hex')

    const user=await userModel.create({
        username,
        email,
        password:hash,
        bio,
        profilepic
    })

    const token=jwt.sign({
        id:user._id,
        username:user.username
    },process.env.JWT_SECRET,
    {expiresIn:"1d"}
     )
    
     res.cookie("token",token);

     res.status(201).json({
        message:"user successfully registered",
        user:{username:user.username,
        email: user.email,
        bio:user.bio,
        profilepic:user.profilepic
        }
     })
 
}

async function loginController (req,res){
    const {email,username,password}=req.body

    const user=await userModel.findOne({
        $or:[
            {
                username:username
            },
            {
                email:email
            }
        ]
    })

     if(!user){
        return res.status(409).json({
            message:"user not forund"
        })
     }

     const hash= crypto.createHash('sha256').update(password).digest('hex')

     const isPasswordValid=hash==user.password

     if(!isPasswordValid){
        return res.status(409).json({
            message:"password not valid"
        })
     }


     const token=jwt.sign({
        id:user._id,
        username:user.username,
     },process.env.JWT_SECRET,
    {expiresIn:"1d"})

    res.status(201).json({
        message:"user loggedin syccessfully",
          user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.profileImage
            }
        
    })
}


module.exports={
    registerController,
    loginController
}