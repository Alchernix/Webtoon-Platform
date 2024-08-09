const title = document.getElementById("title")
const nav = document.getElementById("nav")
let display = 0;

document.body.addEventListener("click", function () {
    if (display === 1) {
        title.style.display = "none"
        nav.style.display = "none"
        display = 0
    } else {
        title.style.display = "block"
        nav.style.display = "block"
        display = 1
    }
})