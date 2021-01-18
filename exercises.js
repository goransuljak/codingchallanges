// const openButtons = document.querySelectorAll("[data-modal-target]");
// const closeButtons = document.querySelectorAll("[data-close-btn]");
// const overlay = document.getElementById("overlay");


// openButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal);
//     })
// })

// function openModal(modal) {
//     if(modal === null) return
//     modal.classList.add("active")
//     overlay.classList.add("active")
// }


// // close
// closeButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const modal = button.closest(".modal");
//         closeModal(modal)
//     })
// })



// function closeModal(modal) {
//     if(modal === null) return
//     modal.classList.remove("active")
//     overlay.classList.remove("active")
// }


// overlay.addEventListener("click", () => {
//     const modals = document.querySelectorAll(".modal.active")

//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })



//challenges 



const hexNumber = 
[0,1,2,3,4,5,6,7,8,9,"A", "B","C","D","E","F"];

const hexBtn = document.querySelector(".hexBtn");
const bodyBack = document.querySelector("body");
const hex = document.querySelector(".hex");


hexBtn.addEventListener("click", getHex);

function getHex() {
    let hexCol = "#";
 for(let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumber.length);
    hexCol += hexNumber[random];
 }
 bodyBack.style.backgroundColor = hexCol;
 hex.innerHTML = hexCol;
 hex.style.color = hexCol;
}


