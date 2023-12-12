//function to toggle menu when hamburger icon is clicked
function toggleMenu() {
    var menu = document.getElementById("myTopnav");
    var menuIcon = document.querySelector('.icon');

    if (menu.className === "topnav") {
      menu.className += " responsive";
      menuIcon.innerHTML = "&#10005;"; // Hide the hamburger icon
    } else {
      menu.className = "topnav";
      menuIcon.innerHTML= "&#9776;"; // Show the hamburger icon
    }
    
}

//function to close menu after a menu item is clicked
function closeMenu() {
    var menu = document.getElementById("myTopnav");
    if (menu.className.includes("responsive")) {
      menu.className = "topnav";
    }
}

//FIXME (this function doesn't do anything)
//either make it work with the arrows so that the arrow links to the correct section based on current section, or remove it
//potential thought: change the inner html based on the current section, so that the href links to the appropriate next page
document.addEventListener('DOMContentLoaded', function() {
  var animation = document.querySelector('.scrolldown');

  // Function to check scroll position and hide animation
  function hideAnimationOnScroll() {
    // Get the scroll position
    var scrollPosition = window.scrollY 
    
    console.log('Scroll Position:', scrollPosition);

    // Define the height at which you want the animation to disappear
    var triggerHeight = 500; // Change this value to your desired height

    // Check if the scroll position is greater than the trigger height
    if (scrollPosition > triggerHeight) {
      // Hide the animation by adding a CSS class that hides it
      animation.style.display = 'none';
    } else {
      // Show the animation if scroll position is above the trigger height
      animation.style.display = 'block';
    }
  }

  // Add event listener for scroll event
  window.addEventListener('scroll', hideAnimationOnScroll);
});


//smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      // Get the target ID from the href attribute
      const targetId = this.getAttribute('href').substring(1);

      // Find the target element by its ID
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

let slideIndex = 1;

// Initialize Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust the threshold as needed
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is intersecting! Lazy loading triggered.');
      showSlides(slideIndex);
      observer.unobserve(entry.target);
    }
  });
}, options);

// Call observe on each slide
const slides = document.getElementsByClassName("mySlides");
for (let slide of slides) {
  observer.observe(slide);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

// Document Ready - Initial call to showSlides after Intersection Observer has observed the slides
document.addEventListener("DOMContentLoaded", function() {
  observer.observe(slides[0]); // Assuming the first slide is initially in the viewport
});


