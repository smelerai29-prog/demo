// Simple JavaScript for Interior Design Website

// Show welcome message
alert("Welcome to Interior Design Website!");

// Contact form submit message
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Your message has been sent successfully!");
});

// Change page title when user clicks
document.title = "Interior Design Website";

// Console message
console.log("Website Loaded Successfully");