"use-strict"

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
                                <img class="news-img" src="${image}" alt="">
                                <div class="newsContent">
                                <h1 class="bold">${title}</h1>
                                <p>${desc}</p>
                                <p><span class="bold">Yayınlanma Tarihi: </span>${date}</p>
                                <p><span class="bold">Kaynak: </span>${source}</p>
                                <button class="newsLink" type="button"> <a href="${link}" target="_blank">Habere Git</a></button>
                                </div>
                            </div>
                        `
            newsAddDiv.innerHTML += newsTemplate //Haber template'inin eklenmesi
        })
    } catch (error) {
        console.log(error)
    }
}

const nextNews = document.getElementById("next")
nextNews.addEventListener("click", () => {
    count = count + 12
    sliceStart = sliceStart + 12
    sliceEnd = sliceEnd + 12
    mynetRSS(count)
})

const forwardNews = document.getElementById("forward")
forwardNews.addEventListener("click", () => {
    if (count !== 12) {
        count = count - 12
        sliceStart = sliceStart - 12
        sliceEnd = sliceEnd - 12
        mynetRSS(count)
    }
})

mynetRSS(count);
