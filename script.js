
var navbtn = document.getElementById('nav-btn');
var navbar = document.getElementById('navbar');

navbtn.onclick = ()=>{
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var swiper = new Swiper(".blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//   footer slider

var swiper = new Swiper(".icon-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});