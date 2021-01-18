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

function longestWord(sen) {
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    

    //sort by legnth
    const sorted = wordArr.sort(function(a, b){
      return b.length - a.length;
    })

    const longestWordArr = sorted.filter(function (word){
        return word.length === sorted[0].length;
    })
    if(longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr.join(" ");
    }

}

const result = longestWord("Javasc sexsex is great");

console.log(result);