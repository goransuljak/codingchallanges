const openButtons = document.querySelectorAll("[data-modal-target]");
const closeButtons = document.querySelectorAll("[data-close-btn]");
const overlay = document.getElementById("overlay");


openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal =document.querySelector(
            button.dataset.modalTarget)
            openModal(modal);
    })
})



function openModal(modal) {
    if(modal === null) return
    modal.classList.add("active");
    overlay.classList.add("active")
}


// close
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal =document.querySelector(
            button.dataset.modalTarget)
            openModal(modal);
    })
})



function openModal(modal) {
    if(modal === null) return
    modal.classList.add("active");
    overlay.classList.add("active")
}
















