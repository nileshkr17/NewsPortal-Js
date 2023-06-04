// check login status
const userid = localStorage.getItem("userid");
const logout = document.getElementById("logout");
const id = document.getElementById("id");
if (userid == null) {
  logout.innerHTML = "Login";
  logout.addEventListener("click", () => {
    window.location.href = "./pages/login.html";
  });
} else {
  logout.innerHTML = "Logout";
  id.innerHTML = userid;
  logout.addEventListener("click", () => {
    localStorage.removeItem("userid");
    window.location.href = "./index.html";
  });
}

fetch(
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=badd093afcdc454dabcf992c4debcaee",
  {
    method: "GET",
  }
)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.articles);
    const news_box = document.getElementById("article");
    const news = document.getElementById("news-container");
    for (let i = 0; i < 5; i++) {
      const content1 = document.createElement("div");
      content1.addEventListener("click", () => {
        window.location.href = `${data.articles[0].url}`;
      });
      content1.style.cursor = "pointer";
      content1.id = "content1";
      content1.innerHTML = data.articles[0].title;
      content1.style.color = "white";
      content1.style.fontSize = "20px";
      content1.style.fontWeight = "bold";
      content1.style.textAlign = "center";
      content1.style.paddingTop = "20px";
      content1.style.paddingBottom = "20px";
      content1.style.paddingLeft = "20px";
      content1.style.paddingRight = "20px";
      content1.style.backgroundImage = `url(${data.articles[0].urlToImage})`;
      content1.style.backgroundSize = "cover";

      const content2 = document.createElement("div");
      content2.addEventListener("click", () => {
        window.location.href = `${data.articles[0].url}`;
      });
      content2.style.cursor = "pointer";
      content2.id = "content2";
      content2.innerHTML = data.articles[1].title;
      content2.style.color = "white";
      content2.style.fontSize = "20px";
      content2.style.fontWeight = "bold";
      content2.style.textAlign = "center";
      content2.style.paddingTop = "20px";
      content2.style.paddingBottom = "20px";
      content2.style.paddingLeft = "20px";
      content2.style.paddingRight = "20px";
      content2.style.backgroundImage = `url(${data.articles[1].urlToImage})`;
      content2.style.backgroundSize = "cover";

      const content3 = document.createElement("div");
      content3.addEventListener("click", () => {
        window.location.href = `${data.articles[2].url}`;
      });
      content3.style.cursor = "pointer";
      content3.id = "content3";
      content3.innerHTML = data.articles[2].title;
      content3.style.color = "white";
      content3.style.fontSize = "20px";
      content3.style.fontWeight = "bold";
      content3.style.textAlign = "center";
      content3.style.paddingTop = "20px";
      content3.style.paddingBottom = "20px";
      content3.style.paddingLeft = "20px";
      content3.style.paddingRight = "20px";

      content3.style.backgroundImage = `url(${data.articles[2].urlToImage})`;
      content3.style.backgroundSize = "cover";

      const content4 = document.createElement("div");
      content4.addEventListener("click", () => {
        window.location.href = `${data.articles[3].url}`;
      });
      content4.style.cursor = "pointer";
      content4.id = "content4";
      content4.innerHTML = data.articles[3].title;
      content4.style.color = "white";
      content4.style.fontSize = "20px";
      content4.style.fontWeight = "bold";
      content4.style.textAlign = "center";
      content4.style.paddingTop = "20px";
      content4.style.paddingBottom = "20px";
      content4.style.paddingLeft = "20px";
      content4.style.paddingRight = "20px";

      content4.style.backgroundImage = `url(${data.articles[3].urlToImage})`;
      content4.style.backgroundSize = "cover";

      const content5 = document.createElement("div");
      content5.addEventListener("click", () => {
        window.location.href = `${data.articles[4].url}`;
      });
      content5.style.cursor = "pointer";
      content5.id = "content5";
      content5.innerHTML = data.articles[4].title;
      content5.style.color = "white";
      content5.style.fontSize = "20px";
      content5.style.fontWeight = "bold";
      content5.style.textAlign = "center";
      content5.style.paddingTop = "20px";
      content5.style.paddingBottom = "20px";
      content5.style.paddingLeft = "20px";
      content5.style.paddingRight = "20px";

      content5.style.backgroundImage = `url(${data.articles[4].urlToImage})`;
      content5.style.backgroundSize = "cover";

      news.append(content1, content2, content3, content4, content5);
    }

    data.articles.forEach(item => {
      console.log(item.url);

      news_box.innerHTML += `
        <div id="top-article">
        <a href="${item.url}">
        <img src="${item.urlToImage}" id="image">
        </a>
        <h3 id="title">"${item.title}"</h3>
        <p id="date">Updated at "${item.publishedAt}"</p>
        <p id="desc">"${item.description}"</p>
        </div>`;
      news_box.style.gap = "20px";
      news_box.style.padding = "20px";
      
    });
  });


  let date = document.getElementById('date');
 let time = document.getElementById('time');
 let weather = document.getElementById('weather');
 let loc =document.getElementById('Location');

 date.innerText = new Date().toDateString();
time.innerText = new Date().toLocaleTimeString();
// weather.innerText = new Date().toLocaleTimeString();
navigator.geolocation.watchPosition(function(position) {
    fetch(`https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?geoit=json`)
    .then(response => response.json())
    .then(data => {
        loc.innerText = data.city;
    })
    .catch(err => {
        console.error(err);
    });
  },
  function(error) {
    loc.innerText = "Location not found"; 
  });