const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
   
})

// contact 
const UserMessage = new mongoose.Schema({
    userid:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    }
})
const UserNotify = new mongoose.Schema({
    userid:{
        type:String,
        require:true,
    },
    msg:{
        type:String,
        require:true,
    }
})


const User = new mongoose.model("User", Userschema);
const Message = new mongoose.model("Message",UserMessage)
const Notify = new mongoose.model("Notification",UserNotify)

module.exports = {User,Message,Notify};