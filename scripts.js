/* Navigation bar 'hamburger' dropdown menu */

// Get the HTML elements with the classes "hamburger" and "nav-menu"
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add a click event listener to the hamburger element, calling the mobileMenu function when clicked
hamburger.addEventListener("click", mobileMenu);

// Define the mobileMenu function
function mobileMenu() {
    // Toggle the "active" class on the hamburger and navMenu elements
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Get all HTML elements with the class "nav-link" and create an event listener for each, calling the closeMenu function when clicked
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

// Define the closeMenu function
function closeMenu() {
    // Remove the "active" class from the hamburger and navMenu elements
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




/* Navigation bar 'current' page indicator */

// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through the links and add an event listener to each one
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Remove the "current" class from all links
    navLinks.forEach(link => {
      link.classList.remove('current');
    });
    // Add the "current" class to the clicked link
    event.target.classList.add('current');
  });
});

// Check if the URL contains a fragment (e.g. #home)
const fragment = window.location.hash;

// If there's a fragment, find the corresponding link and add the "current" class
if (fragment) {
  const targetLink = document.querySelector(`a[href="${fragment}"]`);
  if (targetLink) {
    targetLink.classList.add('current');
  }
}




/* Fade in cards */

// Get the container element
var cardsContainer = document.querySelector('.cards-container');

// Define the function to check if the element is in view
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

// Define the function to add the fade-in class
function addFadeInClass() {
  if (isElementInViewport(cardsContainer)) {
    cardsContainer.classList.add('fade-in');
    window.removeEventListener('scroll', addFadeInClass);
  }
}

// Add the fade-in class on scroll
window.addEventListener('scroll', addFadeInClass);
addFadeInClass();
