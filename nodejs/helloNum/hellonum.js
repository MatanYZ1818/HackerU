const express=require("express")

const app=express()

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack',
});

con.connect(err => {
    if (err) {
        throw err;
    }

    console.log("Connection established");
});

app.listen(7777)

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.method,req.url)

    next()
})

app.get("/",(req,res)=>{
    res.send("welcome to th club")
})

app.get("/number/:num",(req,res)=>{
    res.send({
        numbers:new Array(+req.params.num).fill().map((x,i)=>i+1)
    })
})

app.get('/table/:tableName', (req, res) => {
    
    con.query(`SELECT * FROM ${req.params.tableName}`, (err, result) => {
        if (err) {
            throw err;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});

        if (!result.length) {
            res.end(`<h1>אין נתונים</h1>`);
            return;
        }

        const keys = Object.keys(result[0]);

        res.end(`
            <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css">
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                    <title>Table ${req.params.tableName}</title>
                </head>
                <body>
                    <h1>Table ${req.params.tableName}</h1>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                ${keys.map(k=>
                                    `<th>${k}</th>`
                                ).join("")}
                            </tr>
                        </thead>
                        <tbody>
                            ${result.map(item=>`
                                <tr>
                                    ${Object.values(item).map(v=>`<td>${v}</td>`).join("")}
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </body>
            </html>
        `);
    })
});

app.get("/login",(req,res)=>{

    let userName=req.query.userName
    let password=req.query.password

    if(!userName || !password){
        return res.send("משתמש לא קיים")
    }

    con.query("SELECT * FROM `users` WHERE `userName` = ? AND `password` = MD5(?)",[userName,password],(err,result)=>{
        if(!result.length){
            return res.send("שם או סיסמא לא נכונים")
        } else{
            return res.send("משתמש נכנס!")
        }
    })
})

module.exports = con;