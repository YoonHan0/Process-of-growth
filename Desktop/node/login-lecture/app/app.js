// const http = require("http");   //express를 사용하지 않고 서버 구동하는 방법
// const app = http.createServer((req, res) => {   // createServer를 사용해서 동작
//     console.log(req.url); 
//     res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8;"}); // 페이지를 로드할 때 utf-8 형태로 가져와라 (한글)
//     if(req.url === '/') {   // req.url을 이용해서 localhost:3001 이후의 주소를 파싱할 수 있음.
//         res.end("여기는 루트입니다.");
//         console.log("여기는 루트입니다.");
//     } else if(req.url === '/login') {
//         res.end("여기는 로그인입니다.");
//         console.log("여기는 로그인입니다.");
//     }
//  });

//  app.listen(3001,()=> {
//     console.log("http로 구동된 서버입니다.");
//  });

/** express 서버 프레임워크 */
"use strict"    // ES6 표준을 준수해서 코딩을 하겠다라는 의미

// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우터
const home = require("./src/routers/home"); // 라우터를 불러올 수 있게

app.set("views", "./src/views"); // views를 /views 폴더로 지정  
app.set("view engine", "ejs");    // view엔진을 ejs로 지정

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;