const mobileMenu = document.getElementById("mobile-menu");  
const navList = document.querySelector(".nav-manu");  

mobileMenu.addEventListener("click", () => {  
    navList.classList.toggle("active");  
});