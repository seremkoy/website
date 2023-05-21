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

/*MOBILE MENU AREA START*/ 
function MobileNav(){
 
  const Mtoggle = document.getElementById("mobile-menu");
  const mTog = document.getElementById("mTog");
  const togBtn = document.getElementById("mobile-toggle");
  
  document.addEventListener('click', function(e) {
    if (!Mtoggle.contains(e.target) && e.target != mTog ) {
        Mtoggle.style.transform = "translateX(1000px)";
        Mtoggle.style.display = 'none'
        mTog.classList.add('fa-ellipsis');
        mTog.classList.remove('fa-circle-xmark');

    }
});
  if (Mtoggle.style.transform === "translateX(0px)" ){
      Mtoggle.style.transform = "translateX(1000px)";
      mTog.classList.add('fa-ellipsis');
      Mtoggle.style.display = 'none'
      mTog.classList.remove('fa-circle-xmark');
      

  } else{
      Mtoggle.style.transform = "translateX(0px)"     
      mTog.classList.add('fa-circle-xmark');
      Mtoggle.style.display = 'flex'
      mTog.classList.remove('fa-ellipsis');
  }   
}
/*MOBILE MENU AREA END*/ 
const weatherCont = document.getElementById("weather-cont")
const mobileWeather = document.querySelector('.mobile-weather')
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
        mobileWeather.innerHTML = weatherTemplate;
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



//Copyright için tarih -START-
let year = new Date();
year.getFullYear(); //Yılın seçilmesi
//Yılın footer'a yazdırılması
document.getElementById("copy").innerHTML = `Tüm hakları saklıdır. &copy; ${year.getFullYear()} Seremköy v. 1 <span class="dvlpr">Developed By <a href="https://macidko.netlify.app/" target="_blank">Eren</a> & <a href="https://fatih-nayir.netlify.app/" target="_blank">Fatih</a></span>`
//Copyright için tarih -END-


// const mobileNav = document.querySelector(".menu-list")
// const hiddenLength = document.querySelectorAll(".hidden").length



//EMAILJS BEGIN


//EMAILJS END