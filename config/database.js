const mongoose = require('mongoose')//import mongoose
module.exports.connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL);//ket noi mongoose csdl
    console.log("Database connected");
  }catch(err){
    console.log("connect error", err);
  }
}
