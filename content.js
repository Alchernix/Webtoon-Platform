window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const idx = Number(params.get("page"))
    const title = document.getElementById("title")
    const imgContainer = document.getElementById("img-container")
    const backLink = document.getElementById("back-link")
    const nextLink = document.getElementById("next-link")
    document.title = idx
    title.textContent = data[idx].title
    let imgs = ""
    for (i = 0; i < data[idx].images.length; i++) {
        imgs += `
        <img loading="lazy" src="${data[idx].images[i]}">
        `
    }
    imgContainer.innerHTML = imgs
    if (idx - 1 < 0) {
        backLink.style.opacity = "0.5"
        backLink.removeAttribute("href")
        backLink.style.cursor = "default"
    } else {
        backLink.setAttribute("href", `content.html?page=${idx - 1}`)
    }
    if (idx + 1 >= data.length) {
        nextLink.style.opacity = "0.5"
        nextLink.removeAttribute("href")
        nextLink.style.cursor = "default"
    } else {
        nextLink.setAttribute("href", `content.html?page=${idx + 1}`)
    }
    localStorage.setItem("lastread", idx)
}

const titleContainer = document.getElementById("title-container")
const nav = document.getElementById("nav")

let display = 0;

document.body.addEventListener("click", function () {
    if (display === 1) {
        titleContainer.style.display = "none"
        nav.style.display = "none"
        display = 0
    } else {
        titleContainer.style.display = "block"
        nav.style.display = "block"
        display = 1
    }
})