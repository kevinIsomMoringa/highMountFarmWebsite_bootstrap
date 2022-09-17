let track = document.querySelector(".carousel__track")
let slides = Array.from(track.children)
//console.log(slides)
let nextButton = document.querySelector(".carousel__btn1")
let prevButton = document.querySelector(".carousel__btn")
let nav = document.querySelector(".carousel__nav")
let selectors = Array.from(nav.children)
let slideWidth = slides[0].getBoundingClientRect().width;
//console.log(nav)
//console.log(nextButton)
//Get images to display side by side

function imgPos (item, index) {
    item.style.left = slideWidth * index + "px"
}

slides.forEach(imgPos)

//Code for getting buttons to work
let moveToSlide = function(track, currentSlide, targetSlide) {
    document.querySelector(".carousel__track").style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}
const updateDots = function (currentDot, targetDot) {
    currentDot.classList.remove('current-slide')
targetDot.classList.add("current-slide")
}

let arrows = function (slides, prevButton, nextButton, index) {
    if(index === 0) {
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    }else if (index === slides.length -1){
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden')
    }else{
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
    }

}


nextButton.addEventListener("click", function (event){
    let currentSlide = track.querySelector(".current-slide")
    let nextSlide = currentSlide.nextElementSibling
    let currentDot = nav.querySelector('.current-slide')
    let nextDot = currentDot.nextElementSibling
    let nextIndex = slides.findIndex(slide => slide === nextSlide)
    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)
    arrows(slides, prevButton, nextButton, nextIndex)
   


})

prevButton.addEventListener("click", function (event){
    let currentSlide = track.querySelector(".current-slide")
    let prevSlide = currentSlide.previousElementSibling
    let currentDot = nav.querySelector('.current-slide')
    let prevDot = currentDot.previousElementSibling
    let prevIndex = slides.findIndex(slide => slide === prevSlide)
    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)
    arrows(slides, prevButton, nextButton, prevIndex)
})

nav.addEventListener('click', function (e){
   let targetDot = e.target.closest("button")
   //console.log(e.target)
   if(!targetDot) return
   let currentSlide = track.querySelector(".current-slide")
   let currentDot = nav.querySelector(".current-slide")
   let index = selectors.findIndex(dot => dot === targetDot)
   let targetSlide= slides[index]
   moveToSlide(track, currentSlide, targetSlide)
updateDots(currentDot, targetDot)
arrows(slides, prevButton, nextButton, index)

})
