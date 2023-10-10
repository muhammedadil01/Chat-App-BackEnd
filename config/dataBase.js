const mongoose =require("mongoose")

const connectDB =async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://adilshoukath:jMzhIT457kHJ6OPb@chatapp.dkgvmb8.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("DataBase Connected");
    }catch(error){
      console.log(`Error:${error}`);

      process.exit();
    }
}

module.exports = connectDB 