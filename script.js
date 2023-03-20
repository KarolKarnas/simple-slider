let slides = document.querySelectorAll('.slide')
slides = [...slides]
let first
console.log(slides);


function render() {

    slides.forEach((slide, index) => {
    slide.style.left = `${index * 1920}px`
})

}

window.addEventListener('keydown', (e) => {
if (e.keyCode === 37) {
    console.log('leftArrow pressed');
    first = slides.shift()
    slides.push(first)
    console.log(slides);
    render()

} else if (e.keyCode === 39) {
    console.log('rightArrow pressed');
}

console.log(e.keyCode)
})


render()