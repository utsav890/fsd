const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const div = document.getElementById("div");

const user ={
    email:"sachan@gmail.com",
    password:"1234"
};

btn.addEventListener("click",()=>{
    if( user.email === email.value && user.password === password.value ){
        div.innerHTML = `<h1>Login Successful</h1>` ;
        div.style.color = "green" ;
    }
    else{
        div.innerHTML = `<h1>Login Failed</h1>` ;
        div.style.color = "red" ;
        email.value = "" ;
        password.value = "" ;
        email.focus() ;
        
    }
});

