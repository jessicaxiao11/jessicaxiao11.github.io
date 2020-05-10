var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var len = 11;
  if (n > len) {slideIndex = 1} 
  if (n < 1) {slideIndex = len}
  for (i = 0; i < len; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block"; 
}


var slideIndex = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}