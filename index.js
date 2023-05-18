//Scroll Back To Top -START-
let toTop = document.getElementById('scrl') //to top butonunun seçilmesi
toTop.addEventListener('click', function () { //Butona click eventi
  window.scrollTo({ //Tıklandığında yönlendirecek fonksiyon
    top: 0, //Top konumu
    left: 0, //Left konumu
    behavior: 'smooth' //Hareket şekli
  });
})
//Scroll Back To Top -END-

//Copyright için tarih -START-
let year = new Date();
year.getFullYear(); //Yılın seçilmesi
//Yılın footer'a yazdırılması
document.getElementById("copy").innerHTML = `Tüm hakları saklıdır. &copy; ${year.getFullYear()} Seremköy v.0.5 <br><span class="cr"> </span><br><span class="dvlpr">Creators rnm💀 - fatih nayir🐦</span>`
//Copyright için tarih -END-





const weatherCont = document.getElementById("weather-cont")

async function weatherApi() {
  try {
    // API isteği atılır
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.262625&lon=26.710540&units=metric&lang=tr&appid=d25e485f9a40cf3edd8d1f42ed8fab4e");

    // İstek sonucu alınır ve JSON formatına çevrilir
    const data = await response.json();


    if (response.ok) {
      // Yanıt başarılı

      // Alınan veriler konsola yazdırılır
      console.log(data);

      //Alınan veriler değişkene atanır
      const weatherMain = data.weather[0].main
      const weatherIcon = data.weather[0].icon
      const weatherTemp = data.main.temp

      let weatherTemplate = `
          <div class="temp">
            <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png">   
            <span class="temp">${weatherTemp}°</span>
          </div>
          <div>
            <span>Uzunköprü</span>
          </div>
        `


        weatherCont.innerHTML = weatherTemplate;
    } else {
      // Yanıt başarılı değilse, bir hata fırlatılır
      throw new Error("API isteği başarısız oldu")
    }
  } catch (error) {
    // Hata oluştuğunda konsola yazdırılır
    console.log(error);
  }
}

weatherApi();








const hamburgerButton = document.getElementById("hamburger")
const mobileNav = document.querySelector(".menu-list")
const hiddenLength = document.querySelectorAll(".hidden").length



//EMAILJS BEGIN


//EMAILJS END