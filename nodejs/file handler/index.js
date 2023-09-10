const express = require("express");
const cors = require('cors');
const fs = require('fs');
const moment = require("moment/moment");
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(2);

app.get('/',(req,res)=>{
    res.send("welcome")
})

app.get('/test',(req,res)=>{
    fs.appendFile("test.txt","hello my name is JOJO \n ",(err)=>{
        if(err){
            throw err
        }

        res.send("file created")
    })
})
app.get('/test2',(req,res)=>{
    fs.appendFile("test2.txt",`${req.query.log} \n`,(err)=>{
        if(err){
            throw err
        }

        res.send("file created")
    })
})
app.get('/test3',(req,res)=>{
    const now=moment().format('MMMM Do YYYY, h:mm:ss a')
    fs.appendFile("testTime.txt",`the time now is ${now} \n`,(err)=>{
        if(err){
            throw err
        }

        res.send("file created")
    })
})
app.get('/show-file',(req,res)=>{
    fs.sendFile(`${__dirname}/test.txt`)
})