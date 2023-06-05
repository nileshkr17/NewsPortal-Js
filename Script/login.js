const user= [
    {
      "id": 1685647324883,
      "name": "nileshkr17",
      "email": "ece.20becd76@silicon.ac.in",
      "password": "qwerty"
    },
    {
      "id": 1685821563705,
      "name": "shanvi9869",
      "email": "demo@mail.com",
      "password": "qwerty"
    },
    {
      "id": 1685849736403,
      "name": "sonalii",
      "email": "sonali@sit.com",
      "password": "qwerty"
    },
    {
      "id": 1685876776019,
      "name": "sahil",
      "email": "firox54@pyadu.com",
      "password": "1234"
    }
  ]


const login = document.getElementById("login");
const error = document.getElementById("error");
const success = document.getElementById("success");

login.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username != "" || password != "") {
            console.log(user);
            const check = user.find(
            user => user.name == username && user.password == password
            );
            if (check) {
            success.innerHTML = "Login sucessfull";
                localStorage.setItem("userid",username);  
            window.location.href = "../index.html";
            } else {
            error.innerHTML = "Invalid credentials";
            console.log(user);
            }
    } else {
        error.innerHTML = "Please fill all the fields";
        console.log(user);
    }
});