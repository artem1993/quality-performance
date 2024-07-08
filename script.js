const burger = document.getElementById("burger"),
    menuToggle = document.querySelector(".toggle-menu"),
    menuToggleList = document.querySelector(".toggle-menu__list"),
    menuList = document.querySelector(".menu__list"),
    popupBtn = document.getElementById("popupBtn"),
    forBtns = document.querySelectorAll(".forBtn"),
    slides = document.querySelectorAll(".slider__slide"),
    arrows = document.querySelectorAll(".slider__arrow"),
    arrowPrevClass = "slider__arrow_prev",
    arrowNextClass = "slider__arrow_next",
    openClass = "open",
    disabledClass = "disabled",
    activeClass = "active"

const toggleClass = (el, toggleClass) => el.classList.toggle(toggleClass)
const addHTML = (insertHTML, getHTML) => (insertHTML.innerHTML = getHTML.innerHTML)

function moveBurger() {
    toggleClass(this, openClass)
    toggleClass(menuToggle, disabledClass)
}

addHTML(menuToggleList, menuList)
forBtns.forEach(btn => addHTML(btn, popupBtn))

const switchSlider = () => {
    let slideIndex = 0
    const toggleSlide = index => {
        slides[slideIndex].classList.remove(activeClass)
        slides[index].classList.add(activeClass)
        slideIndex = index
    }

    arrows.forEach(arrow => {
        arrow.addEventListener("click", e => {
            if (e.target.classList.contains(arrowPrevClass)) {
                let index = slideIndex - 1
                if (index < 0) index = slides.length - 1
                toggleSlide(index)
            } else if (e.target.classList.contains(arrowNextClass)) {
                let index = slideIndex + 1
                if (index >= slides.length) index = 0
                toggleSlide(index)
            }
        })
    })

    toggleSlide(slideIndex)
}

burger.addEventListener("click", moveBurger)
switchSlider()
