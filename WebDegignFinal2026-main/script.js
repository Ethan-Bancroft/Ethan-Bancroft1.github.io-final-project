let images = [
    "images/download.jpg",
    "images/download copy.jpg",
    "images/download-2.jpg",
    "images/images.jpg",
    "images/download.png"
];

let captions = [
    "Robotics!",
    "Theater!",
    "Music",
    "Art",
    "Web Design",
];

let currentIndex = 1;

const carouselImage = document.getElementById("carousel-image");
const carouselCaption = document.getElementById("carousel-caption");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updateCarousel() {
    carouselImage.src = images[currentIndex];
    carouselCaption.textContent = captions[currentIndex];
}  

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateCarousel();
});
