const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
const postRoute = require('./routes/snack');
app.use('/snack',postRoute);

const uploadRoute = require('./routes/fileuploads');
app.use('/images',uploadRoute);

mongoose.connect("mongodb://localhost:27017/snack",() =>{
  console.log("Connected to DB");
});
app.listen(3000);
