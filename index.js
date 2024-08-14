const contentList = document.getElementById("content-list")
const chapters = document.getElementById("chapters")
const orderBtn = document.getElementById("order")
const mainImg = document.getElementById("main-img")
const mainImgBig = document.getElementById("main-img-big-container")
const container = document.getElementById("container")

chapters.textContent = `총 ${data.length}화`

orderBtn.addEventListener("click", function () {
    contentList.classList.toggle('reverse')
    if (orderBtn.textContent === '⮃최신화부터') {
        orderBtn.textContent = '⮃1화부터'
    } else {
        orderBtn.textContent = '⮃최신화부터'
    }
})

function render() {
    let innerHtml = ""
    for (let i = data.length - 1; i > -1; i--) {
        innerHtml += `
    <li>
        <a href="content.html?page=${i}" class="item-lst">
            <div class="thumbnail">
                <img src="${data[i].thumbnail}">
            </div>
            <div class="info">
                <p class="name">${data[i].title}</p>
                <p class="date">${data[i].date}</p>
            </div>
        </a>
    </li>
    `
    }
    contentList.innerHTML = innerHtml
    const lastread = localStorage.getItem("lastread")
    if (lastread) {
        contentList.children[data.length - lastread - 1].innerHTML += `<div class="bookmark"></div>`
    }
}

render()

mainImg.addEventListener("click", function () {
    mainImgBig.style.display = "flex"
    container.style.filter = "blur(5px)"
})

mainImgBig.addEventListener("click", function () {
    container.style = ""
    mainImgBig.style.display = "none"
})