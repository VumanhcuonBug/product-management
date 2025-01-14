const express = require("express");//import express

const router = express.Router();//tao router

const controller = require("../../controllers/client/home.controller.js");

router.get("/", controller.index);

module.exports = router;//export router