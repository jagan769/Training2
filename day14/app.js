const mysql =require('mysql2')
const express = require('express');
var app=express();
const bodyparser= require ('body-parser');
app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Oracle@123',
    database: 'day12',
    multipleStatements: true
    });
mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });
    app.listen(3000,()=> console.log("express server is running"));
app.get('/join' , (req, res) => {
    mysqlConnection.query('select fooditems.foodid,fooditems.foodname,category.categoryid,category.categorytype,fooditems.price from category join fooditems where category.categoryid=fooditems.categoryid', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } ); 

app.get('/category' , (req, res) => {
    mysqlConnection.query('select * from category', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );
app.get('/category/:id' , (req, res) => {
    mysqlConnection.query('select * from category WHERE categoryid= ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );
app.get('/fooditems/:id' , (req, res) => {
    mysqlConnection.query('select * from fooditems WHERE foodid= ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

app.get('/fooditems' , (req, res) => {
    mysqlConnection.query('select * from fooditems', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );  
     
app.post('/fooditems/add' , (req, res) => {
    mysqlConnection.query("insert into fooditems(foodname,price,categoryid)values('Lemonrice',200,1);", (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );    
app.delete('/fooditems/:id' , (req, res) => {
    mysqlConnection.query('delete from fooditems WHERE foodid= ?',[req.params.id],(err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );