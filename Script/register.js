const button = document.getElementById("register");
const error = document.getElementById("error");
const success = document.getElementById("success");
button.addEventListener("click", () => {
   
  const emailinput = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if(emailinput!="" || username!="" || password!=""){
    const response= fetch("http://localhost:3004/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        name: username,
        email: emailinput,
        password: password,
      })

    })
    if(response){
        success.innerHTML="Registration successful";
        window.location.href = "./login.html";
    }
    else{
        error.innerHTML="Registration failed";
    }
  }else{
    error.innerHTML="Please fill all the fields";
  }
   
    
  console.log(emailinput, username, password);
});
