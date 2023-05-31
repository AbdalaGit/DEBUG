// var section = document.querySelector(".skills");
// var spans = document.querySelectorAll(".progress span");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

// start menu
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


    if(window.scrollY > 250){
        header.classList.add('actvie');
    }else{
        header.classList.remove('actvie');
    }
}
// end menu

// start home
var swiper = new Swiper(".home-slider", {
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },

    autoplay: {
        delay: 2500,
        disableonInteraction: false,
    },
    loop:true,
});
// end home

//start review
var swiper = new Swiper(".review-slider", {

    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableonInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        640: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    }
});
//end review

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop - 100) {
        console.log("Reached Section Skills");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

// start loader
function loader(){
    document.querySelector('.loader-container').classList.add('Addloader');
}

function Addloader(){
    setInterval(loader, 3000);
}

window.onload = Addloader();
// end loader
