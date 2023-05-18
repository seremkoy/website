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





async function test() {
    try {
      // API isteği atılır
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.262625&lon=26.710540&lang=tr&appid=d25e485f9a40cf3edd8d1f42ed8fab4e");
  
      // İstek sonucu alınır ve JSON formatına çevrilir
      const data = await response.json();
  
      // Alınan veriler konsola yazdırılır
      console.log(data);
  
      // Yanıt başarılı değilse, bir hata fırlatılır
      if (!response.ok) {
        throw new Error("API isteği başarısız oldu");
      }
    } catch (error) {
      // Hata oluştuğunda konsola yazdırılır
      console.log(error);
    }
  }
  
test();








const hamburgerButton = document.getElementById("hamburger")
const mobileNav = document.querySelector(".menu-list")
const hiddenLength = document.querySelectorAll(".hidden").length



//EMAILJS BEGIN


//EMAILJS END