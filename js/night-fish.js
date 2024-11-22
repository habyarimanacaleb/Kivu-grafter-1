// Open and close modal
const shareButton = document.getElementById("shareButton");
const reviewModal = document.getElementById("reviewModal");
const closeModal = document.getElementById("closeModal");
const bodyShowandHide = document.bodyShowandHide;

// Show the modal and push the content down when the "Share Your Experience" button is clicked
shareButton.addEventListener("click", () => {
  reviewModal.classList.remove("hidden");
  bodyShowandHide.style.overflow = "hidden";
  bodyShowandHide.style.paddingTop = "100px"; // Adjust this value to control how much the content is pushed down
});

// Close the modal and return bodyShowandHide layout to normal when the "Close" button is clicked
closeModal.addEventListener("click", () => {
  reviewModal.classList.add("hidden");
  bodyShowandHide.style.overflow = "visible";
  bodyShowandHide.style.paddingTop = "0"; // Remove the padding when modal is closed
});

// Optional: Close the modal if the user clicks outside of it
reviewModal.addEventListener("click", (event) => {
  if (event.target === reviewModal) {
    reviewModal.classList.add("hidden");
    bodyShowandHide.style.overflow = "visible";
    bodyShowandHide.style.paddingTop = "0"; // Reset padding when modal is closed
  }
});

// Handle form submission
const reviewForm = document.getElementById("reviewForm");
const testimonialSection = document.getElementById("testimonial");

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Extract form data
  const tourName = document.getElementById("tourName").value;
  const rating = document.getElementById("rating").value;
  const feedback = document.getElementById("feedback").value;

  // Create a new testimonial card
  const testimonialCard = document.createElement("div");
  testimonialCard.className = "testimonial-card p-4 bg-white rounded shadow";
  testimonialCard.innerHTML = `
    <h3 class="text-xl font-semibold mb-2">${tourName}</h3>
    <p class="text-yellow-500">Rating: ${"★".repeat(rating)}</p>
    <p class="text-gray-700 mt-2">${feedback}</p>
  `;

  // Append to testimonials section
  testimonialSection.appendChild(testimonialCard);

  // Reset form and close modal
  reviewForm.reset();
  reviewModal.classList.add("hidden");
});
