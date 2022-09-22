"use strict"

// 라우터는 사용자의 요청에 연결해주는 역할
const express = require("express");
const router = express.Router();
const ctrl = require("./index.ctrl");

router.get("/",ctrl.home);
router.get("/login",ctrl.login);

module.exports = router; 