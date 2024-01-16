var slideIndex = 1;
showSlides(slideIndex);
var slides, dots, timer;

function showSlides(n) {
  var i;
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("image-dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";

  // Clear the previous timer and start a new one
  clearTimeout(timer);
  timer = setTimeout(function(){ showSlides(slideIndex += 1); }, 5000); // Change image every 4 seconds
}

function currentSlide(n) {
  clearTimeout(timer); // Stop the auto-play when a dot is clicked
  showSlides(slideIndex = n);
}



// JavaScript for the review slideshow

var reviewSlideIndex = 0;
showReviewSlides(reviewSlideIndex);

function showReviewSlides(n) {
  var i;
  var slides = document.getElementsByClassName("reviewSlide");
  var dots = document.getElementsByClassName("review-dot");

  if (n >= slides.length) { reviewSlideIndex = 0; }
  if (n < 0) { reviewSlideIndex = slides.length - 1; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  
  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide and activate the corresponding dot
  slides[reviewSlideIndex].style.display = "flex";
  dots[reviewSlideIndex].className += " active";
}

// Function to handle the dots click
function currentReviewSlide(n) {
  clearInterval(reviewTimer); 
  reviewSlideIndex = n - 1; 
  showReviewSlides(reviewSlideIndex);
}

// Auto slide functionality for reviews
var reviewTimer = setInterval(function() {
  reviewSlideIndex++;
  showReviewSlides(reviewSlideIndex);
}, 4000); 



