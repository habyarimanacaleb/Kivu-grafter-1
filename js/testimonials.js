const testimonialsData = [
    {
      name: "Alice M.",
      image: "./Kivu-image/avatar.png",
      tour: "Six Island Tour",
      feedback:
        "An unforgettable experience! The islands were beautiful, and the guides were knowledgeable and friendly.",
      rating: 5,
    },
    {
      name: "John D.",
      image: "./Kivu-image/avatar.png",
      tour: "Night Fishing with Singing Fishermen",
      feedback:
        "Loved the atmosphere and the cultural immersion. The singing fishermen made it truly unique.",
      rating: 4.5,
    },
    {
      name: "Grace K.",
      image: "./Kivu-image/avatar.png",
      tour: "Karongi Mountains Biking and Hiking",
      feedback:
        "The trails were breathtaking, and the views from the top were worth every step!",
      rating: 5,
    },
    {
      name: "Michael T.",
      image: "./Kivu-image/avatar.png",
      tour: "Local Cultural and Geographical Tours",
      feedback:
        "A great way to learn about Rwanda’s culture and explore hidden gems. Highly recommend!",
      rating: 4.8,
    },
  ];

  ///testimonials
function testimonialCard() {
    // Check if the testimonials container exists
    const testimonialContainer = document.querySelector("#testimonial");
    if (!testimonialContainer) {
      console.error("Testimonial container not found!");
      return;
    }
  
    testimonialsData.forEach((testimonial) => {
      // Create the card element
      const cardElement = document.createElement("div");
      cardElement.classList.add(
        "bg-white",
        "rounded-lg",
        "shadow-md",
        "overflow-hidden",
        "transform",
        "hover:scale-75",
        "transition-transform",
        "duration-300",
        "mx-auto",
        "my-4",
        "max-w-lg",
        "p-5"
      );
  
      // Ensure fallback values for missing data
      const userImage = testimonial.image || "./default-user.jpg"; // Fallback image
      const userName = testimonial.name || "Anonymous";
      const tourName = testimonial.tour || "Unknown Tour";
      const feedback = testimonial.feedback || "No feedback provided.";
      const rating = testimonial.rating || "No rating";
  
      // Generate stars for the rating
      const stars =
        "⭐".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "✨" : "");
  
      // Populate the card's inner HTML
      cardElement.innerHTML = `
                  <div class="flex items-center mb-4">
                      <img src="${userImage}" alt="Photo of ${userName}" class="w-16 h-16 rounded-full object-cover mr-4">
                      <div>
                          <h3 class="text-lg font-semibold text-gray-800">${userName}</h3>
                          <p class="text-sm text-gray-500">${tourName}</p>
                      </div>
                  </div>
                  <p class="text-gray-600 mb-4 italic">"${feedback}"</p>
                  <div class="flex items-center justify-between">
                      <span class="text-yellow-500 text-sm">${stars}</span>
                      <a href="#" class="text-blue-500 text-sm hover:text-blue-700">Read More</a>
                  </div>
              `;
  
      // Append the card to the container
      testimonialContainer.appendChild(cardElement);
    });
  }