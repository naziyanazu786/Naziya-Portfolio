// Scroll event for dynamic background change
window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let homeSection = document.querySelector('#home');
  let aboutSection = document.querySelector('#about');
  let educationSection = document.querySelector('#education');
  let skillsSection = document.querySelector('#skills');
  let certificationsSection = document.querySelector('#certifications');
  let projectsSection = document.querySelector('#projects');
  let contactSection = document.querySelector('#contact');

  // Change background color for home section
  if (homeSection) {
    if (scrollPosition > 100) {
      homeSection.style.background = "linear-gradient(135deg, rgba(252,70,107,1) 0%, rgba(118,255,3,1) 100%)";
    } else {
      homeSection.style.background = "linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
    }
  }

  // Add background change effects for other sections (optional)
  if (aboutSection && scrollPosition > aboutSection.offsetTop - 300) {
    aboutSection.style.backgroundColor = "#c8e6c9";
  }

  if (educationSection && scrollPosition > educationSection.offsetTop - 300) {
    educationSection.style.backgroundColor = "#fff";
  }
  if (skillsSection && scrollPosition > skillsSection.offsetTop - 300) {
    skillsSection.style.backgroundColor = "#ffeb3b";
  }

  if (certificationsSection && scrollPosition > certificationsSection.offsetTop - 300) {
    certificationsSection.style.backgroundColor = "#f44336";
  }

  if (projectsSection && scrollPosition > projectsSection.offsetTop - 300) {
    projectsSection.style.backgroundColor = "#9c27b0";
  }

  if (contactSection && scrollPosition > contactSection.offsetTop - 300) {
    contactSection.style.backgroundColor = "#00bcd4";
  }
});

// Typed.js initialization for dynamic text
document.addEventListener('DOMContentLoaded', function() {
  const options = {
    strings: ["Web Developer", "Data Science Enthusiast", "JavaScript Programmer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  };

  var typed = new Typed(".text", options);
  var typed = new Typed('.typed-text', {
            strings: ['Shaik Naziya', 'a Full Stack Developer', 'a Data Science Enthusiast'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });

  // Get current page URL
  const currentLocation = window.location.pathname;
  
  // Get all navbar links
  const navLinks = document.querySelectorAll('.navbar a');
  
  // Remove active class from all links and add to current page link
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Smooth Scroll for Navigation (Single instance)
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 50, // Adjust 50px to account for fixed header
            behavior: 'smooth'
        });
    });
});

// Hover Effect for Timeline (Ensure these elements exist in your HTML)
const timelineItems = document.querySelectorAll('.single-horizontal-timeline');

timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        item.style.transform = 'scale(1)';
    });
});

// Mobile menu toggle function (ensure the element exists in HTML)
function myMenuFunction() {
  const navMenu = document.getElementById("myNavMenu");
  navMenu.classList.toggle("responsive");
}
