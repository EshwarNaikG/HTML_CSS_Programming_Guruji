const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let index = 0;
let totalSlides = slide.length;

// Create dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  
  dot.addEventListener('click', () => {
    index = i;
    updateCarousel();
  });

  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

// Update function
function updateCarousel() {
  slides.style.transform = `translateX(-${index * 800}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Next button
next.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

// Prev button
prev.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Auto-slide
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateCarousel();
}, 3000);