const express=require("express")

const app=express()

app.listen(6969,()=>{
    console.log("the app is running...")
})

app.get("/",(req,res)=>{
    res.send("hello world")
})