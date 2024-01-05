const navbar_btn=document.querySelector(".mobile-navbar-btn");
const  nav_header=document.querySelector(".header");
const togglenavBar = () =>{
   nav_header.classList.toggle("active");
};

navbar_btn.addEventListener("click",() => togglenavBar());