document.addEventListener('DOMContentLoaded', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Optional for re-animation
            }
        });
    });

    fadeIns.forEach((el) => observer.observe(el));
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//scrole content
//
// Get the button
const scrollToTopButton = document.getElementById('scrollToTop');

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopButton.classList.remove('hidden'); // Show the button
  } else {
    scrollToTopButton.classList.add('hidden'); // Hide the button
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

