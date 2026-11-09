//server ko start krna

//root file
// dovrir-zypxur-tyVfa0
const app=require("./src/app")
const connectDB=require("./src/db/db")

connectDB()

app.listen(3000,()=>{
    console.log("server is running")
})
