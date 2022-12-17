const images = document.querySelectorAll('img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.10) {
      entry.target.classList.add("animate")
    } else {
      entry.target.classList.remove("animate")
    }
  })
}, {
  threshold: [0, 0.10, 0.9, 1]
})

images.forEach(image => {
  observer.observe(image)
})






var aside = document.querySelector("aside");
var carouselImages = aside.querySelectorAll("img");
var currentImageIndex = 0;
var interval = 4000;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  for (var i = 0; i < carouselImages.length; i++) {
    carouselImages[i].style.display = "none";
  }
  carouselImages[currentImageIndex].style.display = "block";
}
setInterval(nextImage, interval);