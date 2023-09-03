const express=require("express")

const app=express()

app.listen(7777,()=>{
    console.log("the app is running...")
})

app.get("/",(req,res)=>{
    res.send("hello world 7!")
})