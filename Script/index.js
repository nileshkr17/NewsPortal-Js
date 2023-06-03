// fetch news api using js only and console.log the data
// https://newsapi.org/docs/get-started

// fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=badd093afcdc454dabcf992c4debcaee")
// .then((response) => {
//     console.log(response);
//     return response.json();

    
// }
// )

fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=badd093afcdc454dabcf992c4debcaee",{
    method: "GET",
}).then((response) => response.json())
.then((data) => {

    console.log(data);
    console.log(data.articles);
    const news_box=document.getElementById("news-container");
    data.articles.map((item)=>{
        console.log(item.title);
        const content1=document.createElement("div");
        content1.id="content1";
        content1.innerHTML=item.title;
        const content2=document.createElement("div");
        content2.id="content2";
        content2.innerHTML=item.title;
        const content3=document.createElement("div");
        content3.id="content3";
        content3.innerHTML=item.title;
        const content4=document.createElement("div");
        content4.id="content4";
        content4.innerHTML=item.title;

        const content5=document.createElement("div");
        content5.id="content5";
        content5.innerHTML=item.title;

        news_box.append(content1,content2,content3,content4,content5);

});
}
)
