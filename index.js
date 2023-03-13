//Scroll Back To Top
let toTop = document.getElementById('scrl')
toTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})
//Get Year
let year = new Date();
year.getFullYear();
document.getElementById("copy").innerHTML = `Copyright &copy; ${year.getFullYear()} Seremköy v0.5 BETA. Created by rnm - bablock`

// 2a549216ecee4d72bf04a04531f22452  news api key


fetch("https://newsapi.org/v2/everything?q=edirne&apiKey=2a549216ecee4d72bf04a04531f22452")
.then((response) => response.json())
.then( (data) => {
    console.log(data.articles)
    let news = data.articles
    const newsAdd = document.getElementById("contCardMain")
    news.forEach(element => {

            let author = element.author
            let title = element.title
            let description = element.description
            let publishedAt = element.publishedAt.slice(0,10)
            let url = element.url
            let urlToImage = element.urlToImage

            if(author === null){
                author = "Bulunamadı"
            }
            console.log(author)

            let newsTemplate =
            `
            <div class="card">
            <img class="news-img" src="${urlToImage}" alt="">
                <div class="newsContent">
                    <h1 class="bold">${title}</h1>
                    <p>${description}</p>
                    <p>${publishedAt}</p>
                    <a href="${url}" class="newsLink" target="_blank">Habere Git</a>
                </div>
            </div>
            `
            newsAdd.innerHTML += newsTemplate
    });
})