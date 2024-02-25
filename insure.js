/* 
const menu = document.querySelector("ul");

const menuItems = document.querySelectorAll("a");

const  hamburger = document.querySelector(".hamburger");

const closeIcon = document.querySelector(".menuClose");

const menuIcon = document.querySelector(".menuOpen");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

 */


let menuOpen = document.querySelector(".menuOpen");
let menuClose = document.querySelector(".menuClose");
let menu = document.querySelector("ul");



let showMenu = () => {
    let a =0;
    menu.style.transform = `translateX(${a}%)`
    menuOpen.style.display = "none";
    menuClose.style.display ="block";

};

let hideMenu = () => {
    let a = 150;
    menu.style.transform = `translateX(${-a}%)`
    menuOpen.style.display = "block";
    menuClose.style.display ="none";

}

menuOpen.addEventListener("click", () => {
    showMenu();

})

menuClose.addEventListener("click", () => {
    hideMenu();

})



