const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navLinkItems = document.querySelectorAll(".app-nav-links ul li a");
const body = document.body;
// const body = document.body;

// Toggle the menu visibility
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  body.classList.toggle("no-scroll");
  body.style.opacity = 0.4;
});

// Close the menu when clicking any link
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    body.classList.remove("no-scroll");
    body.style.opacity = 1;
  });
});

// Example data for the cards (you can fetch this data from an API or define it locally)
const cardsData = [
  {
    id:1,
    image: "./kivu-image/Six-Island.jpg",
    title: "SIX ISLANDS KIVU TOURS",
    description:
      "Taking a guided boat tour on Lake Kivu offers a fascinating exploration of its islands, each with its own distinctive charm and history. ",
  },
  {
    id:2,
    image: "./kivu-image/Six-Island.jpg",
    title: "KAYAKING ON LAKE KIVU",
    description:
      "Enjoy a serene kayaking experience on the tranquil waters of Lake Kivu, whether you're with a friend or exploring solo. Rent a light, inflatable kayak and paddle at your own pace, soaking in the breathtaking scenery of volcanic mountains and lush landscapes along the shoreline. ",
  },
  {
    id:3,
    image: "./kivu-image/night-shift.jpg",
    title: "Night Fishing With Singing Fisherman",
    description:
      "The night fishing experience tour on Lake Kivu offers a unique and immersive adventure into the traditional fishing practices of Rwandan fishermen.",
  },
  {
    id:4,
    image: "./Kivu-image/local-culture-2.jpg",
    title: "Local Cultural and Geographical Tours",
    description:
      "Discover the vibrant culture and geographical wonders of the region. From traditional dances to breathtaking landmarks, experience the heart of Rwandan heritage.",
  },
  {
    id:5,
    image: "./Kivu-image/long-trip.jpg",
    title: "KIBUYE LOCAL PLANTATION TOURS",
    description: "LONG TRIP KIBUYE TO GISENYI/RUBAVU",
  },
  {
    id:6,
    image: "./Kivu-image/long-trip.jpg",
    title: "LONG TRIP KIBUYE TO GISENYI/RUBAVU",
    description:
      "Kibuye, located on the shores of Lake Kivu in Rwanda, offers a rich experience for visitors interested in exploring local plantations and agriculture, including coffee, macadamia nuts, banana farming, and beans. ",
  },
];

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
  // {
  //   name: "Michael T.",
  //   image: "./Kivu-image/avatar.png",
  //   tour: "Local Cultural and Geographical Tours",
  //   feedback:
  //     "A great way to learn about Rwanda’s culture and explore hidden gems. Highly recommend!",
  //   rating: 4.8,
  // },
];

// Get the container where the cards will be inserted
const container = document.querySelector(".service-container");
const testimonial = document.querySelector(".testimonial");
// Function to create and display cards
function createCards() {
  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add(
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "overflow-hidden",
      "transform",
      "hover:scale-100",
      "transition-transform",
      "duration-300"
    );
    cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.title}" class="w-full  object-cover" style="height:30vh;filter: brightness(1.2);">
                <div class="p-5">
                    <h3 class="text-xl font-bold">${card.title}</h3>
                    <p class="text-gray-600 mt-2">${card.description}</p>
                    <a href="../service-detail.html?id=${card.id}" class="text-blue-500 mt-6 inline-block hover:text-blue-700">Learn More...</a>
                </div>
            `;
    // Append the card to the container
    container.appendChild(cardElement);
  });
}
// Call the function to create and insert cards into the DOM
createCards();

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

// Initialize testimonials dynamically
testimonialCard();

/// share your experience
const bodyVisibility = document.body;

document.getElementById("shareButton").addEventListener("click", function () {
  document.getElementById("reviewModal").classList.remove("hidden");
  bodyVisibility.style.overflow = "hidden";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("reviewModal").classList.add("hidden");
  bodyVisibility.style.overflow = "visible";
});

document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle the review submission (e.g., save to database)
    alert("Thank you for sharing your experience!");
    bodyVisibility.style.overflow = "visible";
    document.getElementById("reviewModal").classList.add("hidden");
  });
