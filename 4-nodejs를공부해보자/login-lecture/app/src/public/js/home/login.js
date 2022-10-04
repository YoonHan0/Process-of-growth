"use strict";

const id = document.querySelector("#id");   // id 불러오기
const psword = document.querySelector("#psword");   // id 불러오기
const loginBtn = document.querySelector("button");  // button tag 불러오기

loginBtn.addEventListener('click', login);

function login() {
    const req = {       // 서버로 넘겨주기 위해서 Object 형태로 id, pw 값을 저장함
        id: id.value,
        psword: psword.value,
    };
    // console.log(req, JSON.stringify(req));  // JSON.stringify(req): JSON 객체를 string형태로 변경해주는 작업, 출력하면 문자열로 나옴
    fetch("/login", {       // fetch: Front에서 서버로 전달하는 작업, /login 경로에 해당하는 API가 만들어져 있어야 함(원래는)
        method: "POST",
        headers: {      // 전달하는 데이터가 JSON이라는 것을 알려줘야함
            "Content-Type": "application/json", // JSON이라고 알려줌
        },
        body: JSON.stringify(req),      // body: req데이터를 JSON형태로 전달해야함
    });
}
