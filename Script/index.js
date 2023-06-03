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
}
)