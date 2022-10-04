"use strict"        // 서버를 작동시키는 js

const app = require("../app");

const PORT = 3000;

app.listen(PORT, function(){
    console.log("서버 가동");
});

