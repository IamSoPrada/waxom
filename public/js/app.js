document.addEventListener("DOMContentLoaded", () => {


function openBurger(){
    let burger = document.querySelector(".header__burger")
    let menu = document.querySelector(".header__navbar")
    let bodyPage = document.querySelector("body")

    burger.addEventListener("click", ()=> {
        burger.classList.toggle("active")
        menu.classList.toggle("active")
        bodyPage.classList.toggle("lock")
    })

}
openBurger()

})