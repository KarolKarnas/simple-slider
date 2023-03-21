const images = document.querySelectorAll('.slide');
let imagesDuplicates = [...images];

const size = images[0].clientWidth;
console.log(size);

let firstDup = images[0].cloneNode(true)
firstDup.classList.add('first-dup')
imagesDuplicates.push(firstDup);

let lastDup = images[images.length - 1].cloneNode(true)
lastDup.classList.add('last-dup')
imagesDuplicates.unshift(lastDup);

const slider = document.querySelector('.slider');
slider.innerHTML = '';

console.log(imagesDuplicates);

function renderOnLoad() {
    imagesDuplicates.forEach((slide) => {
        const value = -855;
        slide.style.transform = `translateX(${value}px)`
        slider.appendChild(slide);
    }); 
}
renderOnLoad()

let counter = 1;
let maxCounter = imagesDuplicates.length - 1;
let minCounter = 0

function renderWithCoutner(counter) {
    imagesDuplicates.forEach((slide) => {
        const value = counter * -855;
        slide.style.transform = `translateX(${value}px)`
    }); 
}


const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')

nextBtn.addEventListener('click', () => {
if (counter < maxCounter) 
counter++;
renderWithCoutner(counter)
})

prevBtn.addEventListener('click', () => {
if (counter > minCounter) 
counter--;
renderWithCoutner(counter)
})











