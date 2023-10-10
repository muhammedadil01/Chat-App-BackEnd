const mongoose = require("mongoose")


const messageModels = mongoose.Schema({
    sender : 
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    reciever : 
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    chat :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Chat"  
    }
},{
    timeStamp : true
})

const Message = mongoose.model("Message",messageModels)

module.exports = Message