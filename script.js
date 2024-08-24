const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carousel = document.querySelector('.carousel');
const dotsContainer = document.querySelector('.dots-container');
const slideTitle = document.getElementById('slide-title');
const slideDescription = document.getElementById('slide-description');

const slides = [
    {
        image: './img/one.jpg',
        title: 'Title new 1',
        description: 'Description for the first slide'
    },
    {
        image: './img/two.jpg',
        title: 'Title new 2',
        description: 'Description for the second slide'
    },
    {
        image: './img/three.jpg',
        title: 'Title new 3',
        description: 'Description for the third slide'
    }
];

let currentIndex = 0;

slides.forEach((slide, index) => {

    const imgElement = document.createElement('img');
    imgElement.src = slide.image;
    imgElement.alt = `Img${index + 1}`;
    carousel.appendChild(imgElement);

    const dotElement = document.createElement('span');
    dotElement.classList.add('dot');
    if (index === 0) {
        dotElement.classList.add('active');
    }
    dotElement.addEventListener('click', () => {
        currentIndex = index;
        updateSlide();
    });
    dotsContainer.appendChild(dotElement);
});

function updateSlide() {
    slideTitle.textContent = slides[currentIndex].title;
    slideDescription.textContent = slides[currentIndex].description;

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlide();
    }
});

updateSlide();
