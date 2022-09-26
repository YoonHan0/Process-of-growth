"use strict"

// 라우터는 사용자의 요청에 연결해주는 역할
const express = require("express");
const router = express.Router();
const ctrl = require("./index.ctrl");

router.get("/",ctrl.home);  // 접근하는 곳이 root(/)이면 ctrl.home
router.get("/login",ctrl.login);    // 접근하는 곳이 login(/login)이면 ctrl.login

module.exports = router; 