const express=require("express")
const followModel = require("../model/follow.model")
const userModel=require("../model/user.model")



async function followUserController(req,res){
    const followerId=req.user.id
    const followeeUsername=req.params.username



    const isfolloweeexist=await userModel.findOne({
        username:followeeUsername
    })

    if(followeeUsername==followerId){
        return res.status(400).json({
            message:"you can  not followw yourself"
        })
    }



    if(!isfolloweeexist){
        return res.status(400).json({
            message:"the user you are trying to follow does not exist"
        })
    }

    const isAlreadyFollowing=await followModel.findOne({
         follower:followerId,
         followee:followeeUsername
    })

    
    if(isAlreadyFollowing){
        return res.status(200).json({
            message:"already following the user"
        })
    }
 
    const followRecord=await followModel.create({
        follower:followerId,
        followee:followeeUsername
    })

    res.status(201).json({
        message:"request sent successfully",
        followRecord
    })

}


async function unfollowUserController(req,res){
   const followerId=req.user.id
    const followeeUsername=req.params.username

    const isUserFollowing=await followModel.findOne({
        follower:followerId,
        followee:followeeUsername
    })
     
    if(!isUserFollowing){
        return res.status(400).json({
            message:`ypu are not following ${followeeUsername}`
        })
    }

    const unfollow=await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message:"succefully unfollowed the user"
    })
}

async function acceptFollowRequestController(req,res){
    const currentUserId=req.user.id //B
    const requestId=req.params.requestId //A  
   
    const followRequest= await followModel.findById(requestId)

    if(!followRequest){
        return res.status(404).json({
            message:"the request does not exist"
        })
    }

    if(followRequest!==currentUserId){
        return res.status(403).json({
            message:"access denied"
        })
    }

    if(followRequest.status!=="pending"){
        return res.status(400).json({
            message:"request already processed"
        })
    }

    followRequest.status="accepted"
    await followRequest.save()

    res.status(201).json({
        message:"request accepted",
        followRequest
    })
}

async function rejectFollowRequestController(req,res){
    const requestId=req.params.requestId
    const currentUser=req.user.id

    const followRequest=await followModel.findById(requestId)
    
     if(!followRequest){
        return res.status(400).json({
            message:"follow request not found"
        })
    }

    if(followRequest.followee!==currentUser){
        return res.status(403).json({
            message:"access denied"
        })
    }

 

    if(followRequest.status!=="pending"){
        return res.status(200).json({
            message:"request already processed"
        })
    }

    followRequest.status="rejected"
    followModel.save()

    res.status(200).json({
        message:"request rejected succefully",
        followRequest
    })
}

module.exports={
    followUserController,unfollowUserController
}