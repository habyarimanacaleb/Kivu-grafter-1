
// Example data for the cards (you can fetch this data from an API or define it locally)
const cardsData = [
  {
    id: 1,
    image: "./kivu-image/six-island-image-2.jpg",
    title: "Six Islands Kivu Tours",
    description:
      "Discover six unique islands including Punishment, Peace, and Farm Islands. Each offers a blend of cultural heritage, lush landscapes, and recreational activities.",
  },
  {
    id: 2,
    image: "./kivu-image/kayaki-image-1.jpg",
    title: "Kayaking on Lake Kivu",
    description:
      "Glide across Lake Kivu’s calm waters while enjoying stunning views of volcanic mountains. Perfect for both solo explorers and groups.",
  },
  {
    id: 3,
    image: "./kivu-image/night-fishing.jpg",
    title: "Night Fishing with Fishermen",
    description:
      "Experience Rwandan tradition with night fishing tours. Enjoy local songs while participating in or observing this cultural activity.",
  },
  {
    id: 4,
    image: "./kivu-image/local-culture.jpg",
    title: "Local Cultural and Geographics",
    description:
      "Immerse yourself in Rwanda’s rich culture with traditional dances, local cuisine, and scenic tours of Nyakariba Swamp and Nkombo Island.",
  },
  {
    id: 5,
    image: "./kivu-image/plantation-2.jpg",
    title: "Kibuye Local Plantation Tours",
    description:
      "Explore plantations of coffee, bananas, and macadamia nuts. Learn about traditional farming practices while enjoying scenic landscapes.",
  },
  {
    id: 6,
    image: "./kivu-image/long-trip.jpg",
    title: "Long Trip: Kibuye to Gisenyi",
    description:
      "Embark on a boat trip along Lake Kivu’s shores. Take in breathtaking views and explore cultural attractions during this journey.",
  },
  {
    id: 7,
    image: "./kivu-image/congo-nile.jpg",
    title: "Congo Nile Trail Adventures",
    description:
      "Hike, bike, or kayak along this iconic trail. Enjoy diverse landscapes, vibrant communities, and stunning lake views.",
  },
  {
    id: 8,
    image: "./kivu-image/night-ampibians-2.jpg",
    title: "Night Amphibians Tour",
    description:
      "Explore Nyakariba Swamp under the stars. Spot unique amphibians and learn from knowledgeable guides about this nocturnal ecosystem.",
  },
  {
    id: 9,
    image: "./kivu-image/bird-watching.jpg",
    title: "Bird Watching Experience",
    description:
      "Observe diverse bird species such as herons and kingfishers. Popular spots include Mbabara and Mafundugu Islands.",
  },
  {
    id: 10,
    image: "./kivu-image/coffee-macadamia.jpg",
    title: "Coffee and Macadamia Experience",
    description:
      "Visit Kinunu’s plantations to learn about coffee and macadamia cultivation. Enjoy fresh brews and engage with local farmers.",
  },
  {
    id: 11,
    image: "./kivu-image/nyakiriba-swamp-2.jpg",
    title: "Nyakariba Swamp Exploration",
    description:
      "Take a guided tour through the swamp’s rich biodiversity. Perfect for eco-tourists and wildlife enthusiasts.",
  },
  {
    id: 12,
    image: "./kivu-image/eco-tourism.jpg",
    title: "Eco-Tourism and Sustainable Travel",
    description:
      "Learn about sustainable practices while exploring Rwanda’s natural wonders. Engage with projects aimed at conservation and community development.",
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
      "card",
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "overflow-hidden",
      "transform",
      "hover:scale-105",
      "transition-transform",
      "duration-300",
      "p-5",
      "sm:w-full", // Ensure cards span the full width on small screens
      // "md:w-1/3", // Two columns on medium screens
      // "lg:w-1/3"  // Three columns on large screens
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
  "Learnmore-7": "details-pages/congo-nile.html",
  "Learnmore-8": "details-pages/night-ampibians.html",
  "Learnmore-9": "details-pages/bird-watching.html",
  "Learnmore-10": "details-pages/coffee-macadamia.html",
  "Learnmore-11": "details-pages/nyakiriba-swamp.html",
  "Learnmore-12": "details-pages/eco-tourism.html",
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