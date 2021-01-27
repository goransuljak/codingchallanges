const images = document.querySelectorAll(".content")
const listItmes = document.querySelectorAll("nav ul li")


listItmes.forEach((item, index) => {
    item.addEventListener("click", () => {
        hideAllContents()
        hideAllItems()

        item.classList.add("active")
        images[index].classList.add("show")
    })
})


function hideAllContents() {
    images.forEach(image => image.classList.remove("show"))
}
function hideAllItems() {
    listItmes.forEach(item => item.classList.remove("active"))
}
