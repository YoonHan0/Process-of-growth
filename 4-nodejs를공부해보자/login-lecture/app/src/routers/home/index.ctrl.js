"use strict";

const output = {
    home: (req, res)=>{       // "/" 루트로 들어왔을 때 보여줄 화면
        // 기능
       res.render("home/index");    // 작업을 수행하는 render 부분이 controller / 단순하게 rendering 해주는 부분
    },
    login: (req, res) => {
        res.render("home/login");
    },
};
const process = {           // login 요청 처리를 위한 Object
    login: (req, res)=>{
        console.log(req.body);
    },
};

module.exports = {
    output,
    process,
};

/*
    Object는 key: value로 구성되어 있는데
    key만 입력해 놓으면 key와 같은 값으로 value가 지정이 됨
    그렇기 때문에
    home: home,
    login: login, 이랑 같은 표현임
 */