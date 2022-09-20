## 2. JavaScript-CRUD 기능 구현


### 결과화면💻</br>

- 회원가입, 회원조회 기능

<p align="center">
  <img src="https://user-images.githubusercontent.com/87405950/191176049-695793af-9919-478e-811f-2ebed2c43128.gif" height="500px" width="700px" align="center">
</p>

</br>

- 회원삭제 기능

<p align="center">
  <img src="https://user-images.githubusercontent.com/87405950/191176058-205563b1-d2a2-4c47-9451-56f69468adf3.gif" height="500px" width="600px" align="center">
</p>

</br>

- ### 공부목적📚
JavaScript에 대한 공부를 하고, DOM 객체에 대한 개념과 사용 방법을 학습하기 위해서 공부를 하였습니다. 그리고 JavaScript로 CRUD 기능을 구현해 봄으로써 JavaScript로 구현할 수 있는 기초적인 개념을 익히기 위해서입니다.

</br>

- ### 기능📱

**1. 회원가입 기능**
- 아래의 조건에 맞게 회원정보를 입력하여 회원가입을 완료하는 기능
- 아이디 조건 : 길이 12자 이상, 공백 미포함
- 비밀번호 조건 : 길이 8자 이상, 특수문자 포함, 비밀번호 확인란과 일치
- 회원가입이 완료되면 입력되어 있던 글자들이 자동으로 사라짐

```javascript
/**회원가입하는 함수 */
function signUp() {         
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;
    var confirm_pw = document.getElementById("confirm-pw").value;
    var display_name = document.getElementById("display-name").value;

    var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;     // 특수문자
    var blank_pattern = /[\s]/g;                    // 공백
    console.log(`id: ${id}, pw: ${pw},  confirm_pw: ${confirm_pw}, display_name: ${display_name}`); // console창으로 확인

    if(id.length > 12 || blank_pattern.test(id)) {
        alert("아이디 길이 or 공백 포함!");          // 아이디 틀림
        return 0;
    }  
    else {
        if(pw.length < 8 || !(pattern_spc.test(pw))) {
            alert("비밀번호 길이 or 특수문자 미포함!");         // 비밀번호 틀림
            return 0;
        }
        else{
            if(pw != confirm_pw) {
                alert("비밀번호가 일치하지 않습니다!");         // 비밀번호 확인 틀림
            }
            else {
                alert("회원가입 완료!");                       // 회원가입 완료!
                console.log("회원가입 완료!");

                var elem = document.createElement('ul');
                elem.innerHTML = 
                `<li>--------------------------</li>
                <div class="createMember">
                    <input type="checkbox" class="checkBox">
                    <div>
                        <li>이름: ${display_name}</li>
                        <li>아이디: ${id}</li>
                        <li>비밀번호 : ${pw}</li>
                    </div>
                </div>`;

                document.querySelector('.check_data').append(elem);     // 회원가입이 완료되면 회원조회에 추가

                var id = document.getElementById("id").value = '';
                var pw = document.getElementById("pw").value = '';
                var confirm_pw = document.getElementById("confirm-pw").value = '';
                var display_name = document.getElementById("display-name").value = '';                       // 회원가입 완료 후 입력되어 있던 값들 사라지게 함
            }
        }
    }
}
```

</br>

**2. 회원조회 기능**

- 회원정보를 조회하여 화면에 출력해 주는 기능

```javascript
/**회원조회 함수 */
function check_Member() {               
    var member = document.querySelector('.check_data');
    console.log("회원조회!");
    
    if(member.style.display=='none') { 		
    	member.style.display = 'flex';
    }
    else {
        member.style.display = 'none';
    }
}
```

</br>

**3. 회원삭제 기능**

- 회원정보를 삭제하는 기능
- 체크박스가 클릭된 회원정보만을 삭제
```javascript
/**회원삭제 함수 */
function delete_Member() {               // 회원삭제 함수
    var list = document.querySelectorAll(".checkBox");
    console.log("회원삭제!");

    for(let i =0; i<list.length; i++) {
        if(list[i].checked) {
            list[i].parentElement.parentElement.remove();
        }
    }
}
```

- ### 새롭게 알게 된 내용😮

</br>

**- 특수문자, 공백을 확인하는 test함수**
```javascript
var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;     // 특수문자
var blank_pattern = /[\s]/g;                    // 공백

// blank_pattern.test(id) => ture or false
// pattern_spc.test(pw) => ture or false
```
**- 태그를 만들기 위한 createElement**
```javascript
var elem = document.createElement('ul');
elem.innerHTML = 
    `<li>--------------------------</li>
    <div class="createMember">
      <input type="checkbox" class="checkBox">
      <div>
      <li>이름: ${display_name}</li>
      <li>아이디: ${id}</li>
      <li>비밀번호 : ${pw}</li>
    </div>
  </div>`;
```

**- 회원정보 삭제를 위한 remove()**
```javascript
if(list[i].checked) {
  list[i].parentElement.parentElement.remove();
  alert('회원정보가 삭제되었습니다!');
}
```

</br>

- ### 부족한 점 / 개선할 점✍
</br>
- 회원정보 삭제 부분 alert 경고 알림에 삭제되는 사용자명 출력하기
- Update 기능 구현


</br>

- ### 마무리🙆‍♀️
JavaScript을 이용해서 기능을 구현하면서 코드가 조금 익숙해졌고, 여러 DOM 객체에 대해서도 알 수 있었습니다. JavaScript에 대한 이론적인 공부를 하면서 추가적으로 부족했던 부분을 보완하면 될 거 같습니다.
