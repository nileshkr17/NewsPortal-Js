fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=badd093afcdc454dabcf992c4debcaee",{
    method: "GET",
}).then((response) => response.json())
.then((data) => {
    console.log(data.articles);
    const news = document.getElementById("news");
    data.articles.forEach((element) => {
        //card for top news
        news.innerHTML += 
        // card for top news with published time and author and pull article on click of read more individual news
        // add category to news
        `<div class="card" >
        
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <a href="${element.url}" class="btn btn-primary">Read More</a>
            <p class="card-text"><small class="text-muted">Published At: ${element.publishedAt}</small></p>
            <p class="card-text"><small class="text-muted">Author: ${element.author}</small></p>

        </div>
        </div>`

        ;
    }
    );
}
).catch((err) => { console.log(err); });









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

// onclick ham to cross
const ham = document.getElementById("ham");
const cross = document.getElementById("cross");
const nav = document.getElementById("nav");
ham.addEventListener("click",()=>{
    nav.style.display="block";
    ham.style.display="none";
    cross.style.display="block";
}
);
cross.addEventListener("click",()=>{
    nav.style.display="none";
    ham.style.display="block";
    cross.style.display="none";
}
);

