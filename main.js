const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navLinkItems = document.querySelectorAll(".app-nav-links ul li a");
const body = document.body;
// const body = document.body;

// Toggle the menu visibility
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  body.classList.toggle("no-scroll");
  // body.style.opacity = 0.4;
});

// Close the menu when clicking any link
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    body.classList.remove("no-scroll");
    // body.style.opacity = 1;
  });
});

// Example data for the cards (you can fetch this data from an API or define it locally)
const cardsData = [
  {
    id: 1,
    image: "./kivu-image/Six-Island.jpg",
    title: "SIX ISLANDS KIVU TOURS",
    description:
      "Taking a guided boat tour on Lake Kivu offers a fascinating exploration of its islands, each with its own distinctive charm and history. ",
  },
  {
    id: 2,
    image: "./kivu-image/kayaki-image-1.jpg",
    title: "KAYAKING ON LAKE KIVU",
    description:
      "Enjoy a serene kayaking experience on the tranquil waters of Lake Kivu, whether you're with a friend or exploring solo. Rent a light, inflatable kayak and paddle at your own pace, soaking in the breathtaking scenery of volcanic mountains and lush landscapes along the shoreline. ",
  },
  {
    id: 3,
    image: "./kivu-image/night-shift.jpg",
    title: "Night Fishing With Singing Fisherman",
    description:
      "The night fishing experience tour on Lake Kivu offers a unique and immersive adventure into the traditional fishing practices of Rwandan fishermen.",
  },
  {
    id: 4,
    image: "./Kivu-image/local-culture-2.jpg",
    title: "Local Cultural and Geographical Tours",
    description:
      "Discover the vibrant culture and geographical wonders of the region. From traditional dances to breathtaking landmarks, experience the heart of Rwandan heritage.",
  },
  {
    id: 5,
    image: "./Kivu-image/local-plantantion-1.jpg",
    title: "KIBUYE LOCAL PLANTATION TOURS",
    description:
      "Traveling from Kibuye to Gisenyi/Rubavu offers a scenic experience along Lake Kivu in Rwanda. The route features lush landscapes, terraced hills, and views of the lake, making it a popular choice for tourists. The journey is approximately 110 kilometers and takes around 2.5 to 3 hours by road.",
  },
  {
    id: 6,
    image: "./Kivu-image/long-trip.jpg",
    title: "LONG TRIP KIBUYE TO GISENYI/RUBAVU",
    description:
      "Kibuye, located on the shores of Lake Kivu in Rwanda, offers a rich experience for visitors interested in exploring local plantations and agriculture, including coffee, macadamia nuts, banana farming, and beans. ",
  },
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
                <img src="${card.image}" alt="${card.title}" class="text-center w-full object-cover" style="height:30vh;filter: brightness(1.2)">
                <div class="p-5">
                    <h3 class="text-xl font-bold">${card.title}</h3>
                    <p class="text-gray-600 mt-2">${card.description}</p>
                    <a id='Learnmore-${card.id}' class="text-blue-500 mt-6 inline-block rounded border-2 p-2 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300">Learn More...</a>
                </div>
            `;
    // Append the card to the container
    container.appendChild(cardElement);
  });
}
// Call the function to create and insert cards into the DOM
createCards();
// Define the mapping of IDs to URLs
const pageLinks ={
  "Learnmore-1": "details-pages/six-island.html",
  "Learnmore-2": "details-pages/kayaki.html",
  "Learnmore-3": "details-pages/night-fishing.html",
  "Learnmore-4": "details-pages/local-culture.html",
  "Learnmore-5": "details-pages/kibuye-local-plant.html",
  "Learnmore-6": "details-pages/long-trip.html",
};
// Add event listeners to buttons
document.querySelectorAll('[id^="Learnmore-"]').forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const buttonId = button.id; // Get the button's ID
    const pageId = this.id; // Get the button's ID (e.g., "Learnmore-1")
    const targetPage = pageLinks[buttonId]; // Get the corresponding URL
    if (targetPage) {
      window.location.href = targetPage; // Navigate to the URL
    } else {
      console.error("No page found for this button ID:", buttonId);
      console.error('the page you navigated ha id of :',pageId)
    }
  });
});

