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

