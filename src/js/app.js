
document.addEventListener("DOMContentLoaded", () => {
    

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

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


gsap.from(".promo__title_main", {
    scrollTrigger: {
        trigger: ".promo__title_main",
        toggleActions: "restart"
    }, 
    y: -300,
    duration: 1,
    opacity: 0
  });

gsap.from(".features__item", {
    scrollTrigger: ".features__item",
    duration: 1,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "power2.out", 
    force3D: true
  });

gsap.from(".mobile__img", {
    scrollTrigger: ".mobile__img", 
    x: -500,
    duration: 2,
    opacity: 0
  });

gsap.from(".mobile__descr", {
    scrollTrigger: ".mobile__descr", 
    x: 500,
    duration: 2,
    opacity: 0
  });

gsap.from(".projects__card-item", {
    scrollTrigger: {
        trigger: ".projects__card-item",
        toggleActions: "restart"
    },
    duration: 0.9,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.3, 
    stagger: 0.1,
    ease: "power3.inOut", 
    force3D: true
  });
})