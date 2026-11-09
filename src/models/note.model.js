const mongoose =require("mongoose")

//schema of database

const noteSchema=new mongoose.Schema({
    title:String,
    description:String
    // ,age:Number
})

const noteModel=mongoose.model("note",noteSchema)

module.exports=noteModel