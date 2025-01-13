//express
const express = require('express')//import express

const app = express()//goi ham express
const port = 3000//cong chay

//embeded route
const route = require("./routes/client/index.route.js");

//pug
app.set("views", "./views");
app.set("view engine", "pug");


//call routes
route(app);


app.listen(port, () => {//mo cong 3000
  console.log(`Example app listening on port ${port}`)//log ra terminal so cong
});

