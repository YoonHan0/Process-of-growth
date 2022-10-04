"use strict";

const id = document.querySelector("#id");   // id 불러오기
const psword = document.querySelector("#psword");   // id 불러오기
const loginBtn = document.querySelector("button");  // button tag 불러오기

loginBtn.addEventListener('click', login);

function login() {
    const req = {       // 서버로 넘겨주기 위해서 객체 형태로 id, pw 값을 저장함
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}
