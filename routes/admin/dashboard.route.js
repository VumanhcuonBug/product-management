const express = require("express");//import express

const router = express.Router();//tao router

const controller = require("../../controllers/admin/dashboard.controller.js");

router.get("/", controller.dashboard);

module.exports = router;//export router