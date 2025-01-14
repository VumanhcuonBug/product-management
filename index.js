//express
const express = require('express')//import express
require("dotenv").config();//nhung env

// nhung database tu folder config
const database = require("./config/database.js");
database.connect();

const app = express()//goi ham express
const port = process.env.PORT;//cong chay lay tu env

//embeded route
const route = require("./routes/client/index.route.js");



//pug
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));//tao duong dan tinh trong folder public


//call routes
route(app);


app.listen(port, () => {//mo cong 3000
  console.log(`Example app listening on port ${port}`)//log ra terminal so cong
});

