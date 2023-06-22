const express= require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12627403",
    password: "b42p9Qtx6u",
    database: "sql12627403"
});

app.post("/save" , (req,res) => {
    let data = [req.body.rno, req.body.name, req.body.marks];
    let sql = "INSERT INTO student1 VALUES(?, ?, ?)";
    con.query(sql, data, (err,result)=>{
        if(err) res.send(err);
        else    res.send(result);
    })
})

app.get("/getdata", (req, res) => {
    let sql = "SELECT * FROM student1";
    con.query(sql, (err, result) => {
        if(err) res.send(err);
        else    res.send(result);
    })
})

app.delete("/remove", (req, res) => {
    let data = [req.body.rno];
    let sql = "DELETE from student1 where rno = ?";
    con.query(sql, data, (err, result) => {
        if(err) res.send(err);
        else res.send(result); 
    })
})

app.put("/modify", (req, res) => {
    let data = [req.body.name, req.body.marks, req.body.rno];
    let sql = "UPDATE student1 SET name=?, marks=? WHERE rno=?";
    con.query(sql, data, (err, result) => {
        if(err) res.send(err);
        else    res.send(result);
    })
})

app.listen(5000, () => {console.log("Listeining... @5000")})