let toggle = document.querySelector(".toggle")
    nav = document.querySelector(".nav__menu")

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    nav.classList.toggle("active")
})
// // toggle.addEventListener("click", () => {
// //     toggle.classList.toggle("active")
// //     nav.classList.toggle("active")

// // })

// for (let i = 0; i < nav.length; i++) {
//     toggle.addEventListener("click", function() {
//         nav[i].classList.toggle("active")
//     })
    
//   } 

z