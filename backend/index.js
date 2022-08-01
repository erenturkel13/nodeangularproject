const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'eren',
    password: '7685U',
    database: 'general',
    port: '3306'
})


db.connect(err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connection is successful!');
    }
})

app.get('/user', (req, res) => {
    
    let qr = "select * from general_info;"

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'err');
        }
        res.send({
            message: result
        })
    })
});













app.listen(3000, () => {
    console.log("Server is listening on port: 3000");
})