const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'wcic',
    insecureAuth : true
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/register", (req, res) => {
    const sqlInsert = "INSERT INTO user (username, email, password) VALUES (?,?,?);"
    
    const username = req.body.username
    const email = req.body.email
    const pwd = req.body.pwd

    db.query(sqlInsert, [username, email, pwd], (err, result) => {
        if (err != null) {
            res.send(err)
        }
        res.send("user registered!")
    })
})

app.post("/login", (req, res) => {
    const sqlSelect = "SELECT * FROM user WHERE username = ? AND password = ?"
    
    const username = req.body.username
    const pwd = req.body.pwd

    db.query(sqlSelect, [username, pwd], (err, result) => {
        
        if (err != null) {
            res.send(err)
        }

        if (result) {
            res.send(result)
        }
    })
})

app.post("/setfavorite", (req, res) => {
    if(req.body.favorite) {
        const sqlInsert = "INSERT INTO favorites (id_recipe, id_user) VALUES (?,?);"
    
        const id_recipe = req.body.id_recipe
        const id_user = req.body.id_user

        db.query(sqlInsert, [id_recipe, id_user], (err, result) => {
            if (err != null) {
                res.send(err)
            }
            res.send(result)
        })
    }

    else {
        const sqlDelete = "DELETE FROM favorites WHERE id_recipe=? AND id_user=?"
    
        const id_recipe = req.body.id_recipe
        const id_user = req.body.id_user

        db.query(sqlDelete, [id_recipe, id_user], (err, result) => {
            if (err != null) {
                res.send(err)
            }
            res.send(result)
        })
    }
})

app.post('/isfavorite', function(req, res) {
    const sqlSelect = "SELECT * FROM favorites WHERE id_user = ? AND id_recipe = ?"
    
    const id_recipe = req.body.id_recipe
    const id_user = req.body.id_user

    db.query(sqlSelect, [id_user, id_recipe], (err, result) => {
        console.log(result.length)
        res.send(result.length > 0 ? true : false)
    })
});

app.listen(3001, () => {
    console.log("running on port 3001")
})


