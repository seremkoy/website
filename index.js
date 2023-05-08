//Scroll Back To Top -START-
let toTop = document.getElementById('scrl') //to top button
toTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0, //Top poz
        left: 0, //Left poz
        behavior: 'smooth' //scroll type
    });
})
//Scroll Back To Top -END-

//Copyright Date -START-
let year = new Date();
year.getFullYear(); //year
//render year
document.getElementById("copy").innerHTML = `Tüm hakları saklıdır. &copy; ${year.getFullYear()} Seremköy v.0.5 <br><span class="cr"> </span><br><span class="dvlpr">Creators rnm💀 - fatih nayir🐦</span>`
//Copyright Date -END-


fetch("https://newsapi.org/v2/everything?q=edirne&apiKey=2a549216ecee4d72bf04a04531f22452") //Api'a istek atılan kısım
    .then((response) => response.json()) //Api'dan gelen json yanıtının dönüştürülmesi
    .then((data) => { //Dönüştürülen data'nın kullanıldığı kısım
        let news = data.articles //Api'da haberlerin içerisinde bulunduğu kısım
        const newsAddDiv = document.getElementById("contCardMain") //Haberlerin ekleneceği div'in seçilmesi

        for (index = 0; index < length; index++) { //Api'dan gelen haber sayısının(100) azaltılması için

            let author = news[index].author //Kaynak
            let title = news[index].title //Başlık
            let description = news[index].description //Açıklama
            let publishedAt = news[index].publishedAt.slice(0, 10).split("-") //Tarih ancak iso formatında. O yüzden array'e dönüştürüldü.
            let publishedAtReverse = publishedAt[2] + "-" + publishedAt[1] + "-" + publishedAt[0] //Dönüştürülen tarih ters şekilde yazdırıldı.
            let url = news[index].url //Haber url'i
            let urlToImage = news[index].urlToImage //Haber görseli

            if (author === null) { //kaynak "null" olduğu zaman
                let dotcomPart = null // url'deki ".com" kısmının indexi için
                url.indexOf(".com") > -1 ? dotcomPart = url.indexOf(".com") : dotcomPart = url.indexOf(".de") //yabancı kaynakların ".com" içermemesinden dolayı
                author = url.substring(12, dotcomPart) //Null gelen kaynak değerinin url üzerinden filtreleyerek bulunması
            }
            //Haberlerin eklenmesi için html template'i
            let newsTemplate =
                `
                    <div class="card">
                        <img class="news-img" src="${urlToImage}" alt="">
                        <div class="newsContent">
                        <h1 class="bold">${title}</h1>
                        <p>${description}</p>
                        <p><span class="bold">Yayınlanma Tarihi: </span>${publishedAtReverse}</p>
                        <p><span class="bold">Kaynak: </span>${author}</p>
                        <button class="newsLink" type="button"> <a href="${url}" target="_blank">Habere Git</a></button>
                        </div>
                    </div>
                `
            newsAddDiv.innerHTML += newsTemplate //Haber template'inin eklenmesi

            // let artiBest = document.getElementById("artiBes") 
            // artiBest.addEventListener("click", () => {
            //     let x = document.querySelectorAll(".card")
            //     x.forEach(element => {
            //         element.remove();
            //     })
            //     length = length + 5
            //     // index = index + 5
            //     console.log("Click içi length: ", length)
            //     console.log("Click içi index: ", index)

            //     haberCek()
            // })
        }
        // arr.forEach(element => {

        // });
    })









// }

// window.onload = (event) => {
//     haberCek()

// };

// let artiBest = document.getElementById("artiBes")
// artiBest.addEventListener("click", () => {
//     length += 1;
//     console.log(length)
//     haberCek()
// })








// const dolares = document.getElementById("dollaresS")
// const yuro = document.getElementById("yuro")
// const bulgardaramcigi = document.getElementById("bulgaramcigi")


//     fetch("https://api.exchangerate.host/latest?base=TRY&&symbols=BGN,USD,EUR")
//     .then( (response) => response.json())
//     .then( (data) => {
//         dolares.textContent = "TRY-DOLAR" + data.rates.USD
//         yuro.textContent = "TRY-EURO" + data.rates.EUR
//         bulgardaramcigi.textContent = "TRY-Bulgar amcigi" + data.rates.BGN
//     } )





// // IYZ5MS47Y407IYVV alphavantage api key
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-11-24/currencies/usd.json


//MOBILE NAV BEGIN

const hamburgerButton = document.getElementById("hamburger")
const mobileNav = document.querySelector(".menu-list")
const hiddenLength = document.querySelectorAll(".hidden").length

// hamburgerButton.addEventListener("click", function () {
//     mobileNav.classList.toggle("hidden")
// })

//MOBILE NAV END



//EMAILJS BEGIN


//EMAILJS END