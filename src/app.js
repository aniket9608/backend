//server ko create krna

const express =require("express")
//notes app : we use rest api method so that update, delete and add
const app=express()
const notes=[]

app.use(express.json()) //middleware
//data from postman to body ,to make readable for express

//use post to share data to server
app.post('/notes',(req,res)=>{ //for take notes from user use req
    console.log(req.body);
    //jb v tmhe req.body chahiye then use middleware  express.json()

    notes.push(req.body)
    res.status(201).json({
         message:"note created successfully"
    }) //201: new resources created success
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

//  delete /notes/:index = dynamic index
app.delete('/notes/:index',(req,res)=>{
    const idx=req.params.index

    delete notes[idx]
    res.status(200).json({

        message:"note deleted successfully"
    })
})

//patch: to update prev data
app.patch('/notes/:index',(req,res)=>{
    const idx= req.params.index
    const desc=req.body.description
    const title=req.body.title

    notes[idx].title=req.body.title
    notes[idx].description=desc
    res.status(200).json({
        message:"note updated successfully"
    })
})
module.exports =app