const login = document.getElementById("login");
const error = document.getElementById("error");
const success = document.getElementById("success");

login.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username != "" || password != "") {
        fetch("http://localhost:3004/user")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const user = data.find(
            item => item.name == username && item.password == password
            );
            if (user) {
            success.innerHTML = "Login sucessfull";
                localStorage.setItem("userid",username);  
            window.location.href = "../index.html";
            } else {
            error.innerHTML = "Invalid credentials";
            }
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        error.innerHTML = "Please fill all the fields";
    }
});