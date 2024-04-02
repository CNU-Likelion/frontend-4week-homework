let first_name = document.querySelector(".login__firstname");
let last_name = document.querySelector(".login__Lastname");
let email_address = document.querySelector(".login__EmailAddress");
let password = document.querySelector(".login__Password");

const button = document.querySelector(".login__button");

const print = () => {
    console.log("성 : " + first_name.value);
    console.log("이름 : " + last_name.value);
    console.log("이메일 주소 : " + email_address.value);
    console.log("비밀번호 : " + password.value);
}

button.addEventListener('click',print);
