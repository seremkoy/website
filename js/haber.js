"use-strict"

function scroll() {
    window.scrollTo({ //Tıklandığında yönlendirecek fonksiyon
        top: 0, //Top konumu
        left: 0, //Left konumu
        behavior: 'smooth' //Hareket şekli
    });
}

const RSS_URL = "https://www.mynet.com/haber/rss/kategori/guncel/";
// // const PROXY_URL = "https://api.allorigins.win/raw?url=" + encodeURIComponent(RSS_URL);
const newsAddDiv = document.getElementById("contCardMain") //Haberlerin ekleneceği div
let count = 12
let sliceStart = 0
let sliceEnd = count
async function mynetRSS() {
    try {
        newsAddDiv.innerHTML = "";
        // rssCount = count || 10
        const response = await fetch(RSS_URL)
        const xmlData = await response.text();
        const parser = new DOMParser();
        const data = parser.parseFromString(xmlData, "text/xml")
        const items = Array.from(data.querySelectorAll("item"))
        const filteredItems = items.slice(sliceStart, sliceEnd)
        console.log(items.length)

        filteredItems.forEach(item => {
            const title = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            const image = item.querySelector("img640x360").textContent;
            const date = item.querySelector("pubDate").textContent;
            const desc = item.querySelector("description").textContent;
            const sourceStartIndex = 12;
            const sourceEndIndex = link.indexOf(".com");
            const source = link.slice(sourceStartIndex, sourceEndIndex);

            let newsTemplate =
                `
                            <div class="card">
                                <img class="news-img" src="${image}" alt="Haber Görseli">
                                <div class="newsContent">
                                <h1 class="bold">${title}</h1>
                                <div id="hbr"> <p>${desc}</p> </div>
                                
                                <p><span class="bold">Yayınlanma Tarihi: </span>${date}</p>
                                <p><span class="bold">Kaynak: </span>${source}</p>
                                 <a href="${link}" target="_blank" class="newsLink">Habere Git</a>
                                </div>
                            </div>
                        `
            newsAddDiv.innerHTML += newsTemplate //Haber template'inin eklenmesi
        })
    } catch (error) {
        console.log(error)
    }
}
let countPage = document.querySelectorAll(".count");
const nextN = document.querySelectorAll(".nxt");
nextN.forEach(function(next){
    next.addEventListener("click", () => {
        if (count < 50) {
            count = count + 12
            sliceStart = sliceStart + 12
            sliceEnd = sliceEnd + 12
            mynetRSS(count)
            scroll()
        }
        countPage.forEach(countP => {
            let spanValue = parseInt(countP.innerHTML);
            if (spanValue >= 0 && spanValue < 5) {
                countP.innerHTML = spanValue + 1;
              }
        
        });
    })
})

const forwardNews = document.querySelectorAll(".fwd")
forwardNews.forEach(function(forward){
    forward.addEventListener("click", () => {
        if (count !== 12) {
            count = count - 12
            sliceStart = sliceStart - 12
            sliceEnd = sliceEnd - 12
            mynetRSS(count)
            scroll()
        }
        countPage.forEach(countP => {
            let spanValue = parseInt(countP.innerHTML);
           if(spanValue>= 0 && spanValue > 1){
            countP.innerHTML = spanValue -1
           }
        });
    })
})
// nextNews.addEventListener("click", () => {
//     if (count < 50) {
//         count = count + 12
//         sliceStart = sliceStart + 12
//         sliceEnd = sliceEnd + 12
//         mynetRSS(count)
//         scroll()
//     }
// })

// const nextNews = document.getElementById("next")
// nextNews.addEventListener("click", () => {
//     if (count < 50) {
//         count = count + 12
//         sliceStart = sliceStart + 12
//         sliceEnd = sliceEnd + 12
//         mynetRSS(count)
//         scroll()
//     }
// })

// const forwardNews = document.getElementById("forward")
// forwardNews.addEventListener("click", () => {
//     if (count !== 12) {
//         count = count - 12
//         sliceStart = sliceStart - 12
//         sliceEnd = sliceEnd - 12
//         mynetRSS(count)
//         scroll()
//     }
// })

mynetRSS(count);
