const express = require("express");//import express

const router = express.Router();//tao router

router.get("/", (req, res) => {//.get tao router
  res.render("client/pages/products/index.pug");
});

module.exports = router;//export router