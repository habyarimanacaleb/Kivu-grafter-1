const sliderWrapper = document.getElementById("slider-wrapper");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

// Get total number of slides
const totalSlides = sliderWrapper.children.length;

// Update slider position
function updateSliderPosition() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Go to the next slide
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides; // Wrap around to the first slide
  updateSliderPosition();
});

// Go to the previous slide
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Wrap around to the last slide
  updateSliderPosition();
});





// Get the necessary elements
const showFormBtn = document.querySelector("#showFormBtn");
const experienceForm = document.querySelector("#experienceForm");
const closeFormBtn = document.querySelector("#closeFormBtn");
// Show the form
showFormBtn.addEventListener("click", () => {
  console.log("button clicked");
  // Show the form and add body blur effect
  experienceForm.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent scrolling when form is open
  setTimeout(() => {
    experienceForm.style.opacity = "1"; // Smooth transition effect
  }, 100); // Slight delay to allow transition
});

// Close the form
closeFormBtn.addEventListener("click", () => {
  experienceForm.style.opacity = "0"; // Fade out the form
  setTimeout(() => {
    experienceForm.classList.add("hidden");
    document.body.style.overflow = "auto"; // Allow scrolling again
  }, 500); // Delay before hiding the form completely after animation
});

// Close the form when the form is submitted
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  alert("Thank you for your feedback!");

  // Close the form after submission
  experienceForm.style.opacity = "0"; // Fade out the form
  setTimeout(() => {
    experienceForm.classList.add("hidden");
    document.body.style.overflow = "auto"; // Allow scrolling again
  }, 500); // Delay before hiding the form completely after animation
});
