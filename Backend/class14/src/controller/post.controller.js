const ImageKit=require("@imagekit/nodejs");
const postModel=require("../model/post.model")
const {toFile}=require("@imagekit/nodejs");
const jwt=require("jsonwebtoken");
const userModel = require("../model/user.model");
const likeModel=require("../model/like.model")


const imagekit= new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

async function createPostController(req,res){
  
 console.log(req.body,req.file)



 const file = await imagekit.files.upload({
    file: await toFile(req.file.buffer, req.file.originalname),
    fileName: req.file.originalname
});

const post=await postModel.create({
    caption:req.body.caption,
    image:file.url,
    user:decode.id
})

res.status(201).json({
    message:"post successgully created",
    post
})
}

async function getPostController(req,res) {
   

    const userId=req.user.id
    const post=await postModel.findOne({
        user:userId
    })

    res.status(201).json({
        message:"post fetched succesfully",
        post
    })
}

async function getPostDetails(req,res){
    

    const userId=req.user.id
    const postId=req.params.postId


    const post=await postModel.findById(postId)

    if(!post){
        return res.status(401).json({
            message:"post not found"
        })
    }

    const isUserValid=post.user.toString()===userId

    if(!isUserValid){
        return res.status(403).json({
            message:"access forbidden"
        })
    }

    return res.status(200).json({
        message:"post fetched succesfully",
        post
    })

}

async function likePostController(req,res){
    const postId=req.params.postId
    const username=req.user.username

    const isPostExist=await postModel.findById(postId)
    
    if(!isPostExist){
        return res.status(404).json({
            message:"post not found"
        })
    }

    const likes=await likeModel.create({
        post:postId,
        user:username
    })

    res.status(201).json({
        message:"post liked succefully",
        likes
    })
}



module.exports={
    createPostController,
    getPostController,
    getPostDetails,
    likePostController
}