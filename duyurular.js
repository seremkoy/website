const duyuruCont = document.getElementById("duyuru-cont-main")

async function fetchDuyuruRSS (){
    try {
        const response = await fetch("./rss.xml")
        const xmlData = await response.text()
        const parser = new DOMParser()
        const data = parser.parseFromString(xmlData, "text/xml")
        const items = Array.from(data.querySelectorAll("item"))
        const itemsReverse = items.reverse()

        itemsReverse.forEach(item => {
            const title = item.querySelector("title").textContent
            const iconType = item.querySelector("type").textContent;
            const desc = item.querySelector("description").textContent
            const date = item.querySelector("date").textContent
            const url = item.querySelector("url").textContent

            let announceTemplate = `
            <div class="duyuruCont1">
            <div class="duyuruIconCont">
            <img src="${url}">
            </div>
            <div class="duyuruTextCont">
              <h1 class="duyuruBaslik">${title}</h1>
              <p class="duyuruText">${desc}</p>
              <p>${date}</p>
            </div>
            </div>
            <hr>
            `
            duyuruCont.innerHTML += announceTemplate

        })
    } catch (error) {
        console.log(error)
    }
}

fetchDuyuruRSS()

