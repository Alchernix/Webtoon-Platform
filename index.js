const contentList = document.getElementById("content-list")
const chapters = document.getElementById("chapters")
const orderBtn = document.getElementById("order")
let order = 1 //1 -> 최신화부터, 0 -> 1화부터
chapters.textContent = `총 ${data.length}화`

orderBtn.addEventListener("click", function () {
    if (order === 1) {
        orderBtn.textContent = "⮃1화부터"
        renderFromNew()
        order = 0
    } else {
        orderBtn.textContent = "⮃최신화부터"
        renderFromOld()
        order = 1
    }
})

function renderFromNew() {
    let innerHtml = ""
    for (let i = 0; i < data.length; i++) {
        innerHtml += `
    <li>
        <a href="${data[i].url}" class="item-lst">
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

}

function renderFromOld() {
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

}

renderFromOld()