const menuIcon = document.getElementById("menu-icon")
const menuList = document.querySelector(".right_nav")
menuIcon.addEventListener("click", ()=>{
    menuList.classList.toggle("show")
})