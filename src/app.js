
const express=require('express')
const noteModel=require("./models/note.model")
//create schema. means visualisation of data
const app=express();

// use asunc await fo mongodb method
app.use(express.json())
app.post("/notes",async(req,res)=>{
    const data=req.body

    await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).send({message:"Notes created"})
})

app.get("/notes",async(req,res)=>{
    const notes=await noteModel.find() //find return array => [{} {}] / []
    // const notes=await noteModel.findOne({ //returns one under condition otherwise null  {}/null
    //     title:"test_title2"
    // })
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id=req.params.id
    await noteModel.findOneAndDelete({
        _id:id   //because _id saves in database server
    })
    res.status(200).json({
        message:"Note deleted successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id=req.params.id
    const desc=req.body.description

    await noteModel.findByIdAndUpdate({_id:id},{description:desc})
    res.status(200).json({
        message:"Notes updated successfully"
    })
})
module.exports=app