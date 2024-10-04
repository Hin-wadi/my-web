let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const totalSlides = slides.length;

function showSlides() {
    // Remove 'fade' class from all slides
    slides.forEach(slide => slide.classList.remove('fade'));
    
    // Update the slideIndex
    slideIndex = (slideIndex + 1) % totalSlides;

    // Add 'fade' class to the current slide
    slides[slideIndex].classList.add('fade');

    // Bring the current slide to the top
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.zIndex = 1;
            slide.style.display = 'block'; // Ensure it is visible
        } else {
            slide.style.zIndex = 0;
            slide.style.display = 'none'; // Ensure it is hidden
        }
    });

    // Show next slide after the animation completes
    setTimeout(showSlides, 4000); // Delay for display time
}

// Initialize the slideshow
window.onload = function() {
    slides[slideIndex].style.display = 'block'; // Display the first slide
    slides[slideIndex].classList.add('fade'); // Start with fade animation
    showSlides();
};


 // 获取视频和描述信息
 const videoSrc = this.getAttribute('data-video');
 const title = this.getAttribute('data-title');
 const subtitle = this.getAttribute('data-subtitle');


