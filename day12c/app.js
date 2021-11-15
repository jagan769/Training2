var express = require("express");
var app = express();
var mysql = require("mysql");
var con = mysql.createConnection({
    host :"localhost",
    user :"root",
    password :"Oracle@123",
    database:"day12"
});
con.connect((err)=>{
    if(err) throw err;
    console.log("connected to database")
})
//get cstudent
app.get("/student",function(req,res){
    con.query("select * from stud",(err,result,fields)=>{
        if(err) throw(err);
        res.send(result);
    })
})

//get course
app.get("/course",function(req,res){
    con.query("select * from course",(err,result,fields)=>{
        if(err) throw(err);
        res.send(result);
    })
})

app.get("/courses",function(req,res){
    con.query("select sname,ename from stud inner join exams on stud.sid =exams.sid ",(err,result,fields)=>{
      if(err) throw(err);
      res.send(result);
})
})

app.get("/",function(req,res){
    res.send("welcome")
});

app.listen(9000,function(){
    console.log("server started")
});