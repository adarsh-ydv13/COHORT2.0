const { default: mongoose } = require("mongoose")
const mogoose=require("mongoose")
const userModel = require("./user.model")

const postSchema=new mongoose.Schema({
    caption:{
        type:String,
        default:" "
    },
    image:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"user id is required for creating a post"]

    }
})

const postModel=mongoose.model("post",postSchema)

module.exports=postModel