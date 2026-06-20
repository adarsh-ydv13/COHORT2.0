const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,  
    },
    bio:{
        type:String,
    },
    profilepic:{
        type:String,
        default:"https://ik.imagekit.io/adydv/istockphoto-1451587807-612x612.jpg"       
    }
})

const userModel= mongoose.model("user",userSchema);

module.exports=userModel