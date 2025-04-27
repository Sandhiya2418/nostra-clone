var sidenav = document.querySelector(".side-navbar")
function showNavbar() {
    sidenav.style.left = "0"
}
function closeNavbar() {
    sidenav.style.left = "-60%"
}

var header = document.querySelector(".header");
const btns = document.querySelectorAll(".btn");
const imglist = ["1", "2", "3", "4"];

let index = 0;

btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("btn-left")) {
            index--;
            if (index < 0) {
                index = imglist.length - 1;
            }
        } else {
            index++;
            if (index === imglist.length) {
                index = 0;
            }
        }
        header.style.background = `url('${imglist[index]}.jpg ')`;
        header.style.backgroundSize = "cover";
    });
});
