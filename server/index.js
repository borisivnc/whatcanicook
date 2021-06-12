const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user:'root',
    password:'root',
    database:'website',
    insecureAuth : true
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/register", (req,res)=>{
    const sqlInsert = "INSERT INTO user (username, email, password) VALUES (?,?,?);"
    
    const username = req.body.username
    const email = req.body.email
    const pwd = req.body.pwd
    

    db.query(sqlInsert, [username,email,pwd], (err, result) => {
        if (err != null){
            res.send(err)
        }
        res.send("user registered!")
    })
})

app.post("/login", (req,res)=>{
    const sqlInsert = "SELECT * FROM user WHERE username = ? AND password = ?"
    
    const username = req.body.usernameL
    const pwd = req.body.pwdL
    
    console.log(username)
    console.log(pwd)

    db.query(sqlInsert, [username,pwd], (err, result) => {
        
        if (err != null){
            res.send(err)
        }

        if (result) {
            res.send(result)
            console.log(result)
        }
    })
})

app.get("/", (req, res) => {
    res.send("hello Maria")
})

app.listen(3001, () => {
    console.log("running on port 3001")
})


