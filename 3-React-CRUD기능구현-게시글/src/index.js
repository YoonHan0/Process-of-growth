import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  //./App.js를 말하는거임
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />   
  </React.StrictMode>
);  // <App /> 이게 사용자 정의 태그 component임
    // 이 <App />가 실제로 돌아가는 거는 import App from './App'; //App.js임

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
