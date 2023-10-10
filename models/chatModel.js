const mongoose = require("mongoose")

const chatModels = mongoose.Schema({
    chatName : {type : String},
    isGroupChat : {type : Boolean},
    users : [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
],
    latestMessage : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Message"  
        },
    groupAdmin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }    
},{
    timeStamp : true
})

const chat = mongoose.model("Chat",chatModels)
module.exports = chat