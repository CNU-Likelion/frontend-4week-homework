let Name = ""; //let Name;
let LastName = "";
let Email = "";
let Password = "";

function userInfo() {
  Name = document.getElementById("Name").value;
  LastName = document.getElementById("LastName").value;
  Email = document.getElementById("Email").value;
  Password = document.getElementById("Password").value;
}

let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    userInfo(); // 함수 실행시켜줘야 함.
  console.log(`Name: ${Name}`);
  console.log(`Last Name: ${LastName}`);
  console.log(`Email: ${Email}`);
  console.log(`Password: ${Password}`);
});
