

const table = document.querySelector(".table tbody")




    var ru = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=07e70ac1c887477ca127c61f642f460c';
var r = new Request(ru);
fetch(r)
.then(response=>response.json()).then(data=>{
    let tr = ``;
    data.articles.forEach((article, k) => {
        tr += `<tr>
        <td>${k + 1}</td>
        <td><img src="${article.urlToImage}" width="100"/></td>
        <td>${article.source.name}</td>
        <td>${article.author}</td>
        <td>${article.description}</td>
        <td>${article.publishedAt}</td>
        </tr>`
    });
    table.innerHTML = tr;
})