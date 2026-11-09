
const mongoose=require("mongoose")

async function connectDB(){
    // mongodb+srv://backend:dovrir-zypxur-tyVfa0@backendcmp.uijsrh3.mongodb.net/.  this for cluster not database so
    await mongoose.connect("mongodb+srv://backend:dovrir-zypxur-tyVfa0@backendcmp.uijsrh3.mongodb.net/halley")  //uri
    //connect server and database

    console.log("Connected to DB");
    
}
module.exports=connectDB
