const images = document.querySelectorAll('.slide');
const sliderNav = document.querySelector('.slider-nav');

const size = images[0].clientWidth;
// console.log(size);

let counter = 0;
let timeOutFlag = true;
const maxCounter = images.length - 1;
const minCounter = 0;

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const navIcons = document.querySelectorAll('.icon-nav');

const renderNav = (counter) => {
	navIcons.forEach((icon) => {
		if (counter == icon.dataset.counter) {
			icon.innerHTML = 'radio_button_checked';
		} else {
			icon.innerHTML = 'radio_button_unchecked';
		}
	});
};

const renderWithCoutner = (counter) => {
	images.forEach((slide) => {
		const value = counter * -size;
		slide.style.transform = `translateX(${value}px)`;
	});
	renderNav(counter);
};

const nextImage = () => {
	if (counter < maxCounter) counter++;
	renderWithCoutner(counter);
};

const prevImage = () => {
	if (counter > minCounter) counter--;
	renderWithCoutner(counter);
};

const autoSlide = () => {
	setTimeout(() => {
		if (timeOutFlag) {
			nextImage();
			if (counter === 2) {
				timeOutFlag = !timeOutFlag;
			}
		} else if (!timeOutFlag) {
			prevImage();
			if (counter === 0) {
				timeOutFlag = !timeOutFlag;
			}
		}
		autoSlide();
	}, 2000);
};

nextBtn.addEventListener('click', () => {
	nextImage();
});

prevBtn.addEventListener('click', () => {
	prevImage();
});

window.addEventListener('keydown', (e) => {
	if (e.keyCode === 39) {
		nextImage();
	} else if (e.keyCode === 37) {
		prevImage();
	}
});

sliderNav.addEventListener('click', (e) => {
	if (e.target.classList.contains('icon-nav')) {
		counter = e.target.dataset.counter;
		renderWithCoutner(counter);
	}
});

addEventListener('DOMContentLoaded', () => {
	autoSlide();
});
