const URI = "https://kivugrafter.onrender.com";

async function fetchReviews() {
    const reviewsDiv = document.getElementById("reviews");
  
    try {
      // Fetch reviews from the server
      const response = await fetch(`${URI}/createReview`);
      if (!response.ok) {
        throw new Error(`Failed to fetch reviews. Status: ${response.status}`);
      }
  
      const reviews = await response.json();
  
      // Clear the reviews container
      reviewsDiv.innerHTML = "";
  
      // Display each review
      reviews.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.className =
          "border border-gray-200 p-4 rounded-md shadow-sm bg-gray-50";
        reviewElement.innerHTML = `
          <h2 class="font-semibold text-lg text-gray-700">${review.name}</h2>
          <p class="text-gray-600 mt-2">${review.feedback}</p>
        `;
        reviewsDiv.appendChild(reviewElement);
      });
    } catch (error) {
      console.error(error);
  
      // Show error message in the reviews container
      reviewsDiv.innerHTML = `
        <p class="text-red-500 font-medium">Error: ${error.message}</p>
      `;
    }
  }
  

// Function to handle review submission
document.getElementById("testimonial-form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value; // Optional, unused here
    const feedback = document.getElementById("feedback").value;
  
    if (name && feedback) {
      try {
        const response = await fetch(`${URI}/createReview`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user: name, message: feedback }),
        });
        if (!response.ok) {
          throw new Error("Failed to submit review");
        }
        alert("Thank you for your feedback!");
        fetchReviews(); // Refresh reviews after submission
        document.getElementById("testimonial-form").reset(); // Clear form fields
      } catch (error) {
        alert(`Error:${error.message}`);
      }
    } else {
      alert("Please fill out all fields.");
    }
  });
  
  // Fetch reviews on page load


