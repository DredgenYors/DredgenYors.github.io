document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.horizontal-carousel-track');
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % document.querySelectorAll('.horizontal-carousel-slide').length;
      updateCarousel();
    }
  
    function updateCarousel() {
      const translateValue = -currentIndex * 100;
      carouselTrack.style.transform = `translateX(${translateValue}%)`;
    }
  
    setInterval(nextSlide, 3000); // Adjust the duration between slides (in milliseconds)
  });