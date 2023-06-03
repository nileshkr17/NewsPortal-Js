fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=badd093afcdc454dabcf992c4debcaee",{
    method: "GET",
}).then((response) => response.json())
.then((data) => {
    console.log(data);
    console.log(data.articles);
    const news_box=document.getElementById("article");
    const news=document.getElementById("news-container");
    for(let i=0;i<5;i++){
          const content1=document.createElement("div");
        content1.id="content1";
        content1.innerHTML=data.articles[0].title;
        const content2=document.createElement("div");
        content2.id="content2";
        content2.innerHTML=data.articles[1].title;
        const content3=document.createElement("div");
        content3.id="content3";
        content3.innerText=data.articles[2].title;
        const content4=document.createElement("div");
        content4.id="content4";
        content4.innerText=data.articles[3].title;
        const content5=document.createElement("div");
        content5.id="content5";
        content5.innerText=data.articles[4].title;
        news.append(content1,content2,content3,content4,content5);
    }
  
    data.articles.forEach((item)=>{
        // console.log(item.title);
        
        news_box.innerHTML += `
        <div id="top-article">
        <img src="${item.urlToImage}" id="image">
        <h3 id="title">"${item.title}"</h3>
        <p id="desc">"${item.description}"</p>
        
        </div>`


});
}
)
