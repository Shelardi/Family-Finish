let menu = document.querySelector(".Menu_m");
function ToggleOpen(){
    menu.classList.add("open");
};

function ToggleClose(){
    menu.classList.remove("open");
};
var swiper = new Swiper(".mySwiper", { 
    autoplay: {
        delay: 7500,
  },});
  