const express=require("express")
const followModel=require("../model/follow.model")

async function followRequest(req,res){
    const follower=req.user.id 
    const followee=req.params.username
    


    
}