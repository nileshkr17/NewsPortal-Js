fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=badd093afcdc454dabcf992c4debcaee",{
    method: "GET",
}).then((response) => response.json())
.then((data) => {
    console.log(data);
}
)


if(localStorage.getItem("userid")===null)
{
    const status = document.getElementById("logout");
    status.innerHTML="Login";
    status.addEventListener("click",()=>{
        window.location.href="./pages/login.html";
    });
}else{
    const user = document.getElementById("id");
    user.innerText = localStorage.getItem("userid");
    console.log(localStorage.getItem("userid"));
    // to logout
    const logout = document.getElementById("logout");
    logout.addEventListener("click",()=>{
        localStorage.clear();
        window.location.href = "../index.html";
    });

    

}