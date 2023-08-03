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
            const person = item.querySelector("person").textContent
            const date = item.querySelector("date").textContent
            const url = item.querySelector("url").textContent

            let announceTemplate = `
            <div class="duyuruCont1">
            <div class="duyuruIconCont">
            <img class="duyuru-image" src="images/${url}.webp" alt="Duyuru Görseli">
            </div>
            <div class="duyuruTextCont">
            <h1 class="duyuruBaslik">${title}</h1>
              <div class="duyuru-info">
                <h4 class = "person">${person}</h4>
                <p class="duyuruText">${desc}</p>
              </div>
              
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
    var duyuruConts = document.querySelectorAll(".duyuruCont1");
    var closePop = document.getElementById('close-pop-img')
    duyuruConts.forEach(function(duyuruCont) {
    var duyuruIconCont = duyuruCont.querySelector(".duyuruIconCont");
    duyuruIconCont.addEventListener("click", function() {
        var src = this.querySelector("img").getAttribute("src");
        var popupImg = document.getElementById("popup-img");
        popupImg.setAttribute("src", src);
        var popup = document.getElementById("popup");
        popup.style.display = "flex";
        closePop.addEventListener('click',kapa)

        function kapa(){
            popup.style.display = 'none'
        }
        popup.addEventListener('click',function(){
            popup.style.display = 'none'
        })
    });
    });
   
}

fetchDuyuruRSS()
