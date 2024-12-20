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
    title: "Kayaking And Biking Adventure ",
    description:
      "Glide across Lake Kivu’s calm waters while enjoying stunning views of volcanic mountains. Perfect for both solo explorers and groups.",
  },
  {
    id: 3,
    image: "./kivu-image/night-fishing.jpg",
    title: "Night Fishing Experience",
    description:
      "The Night Fishing Experience on Lake Kivu offers an unforgettable adventure, immersing participants in the traditional fishing practices of local Rwandan fishermen.",
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
    title: "Kibuye To Gisenyi Long Trip",
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
  {
    id: 13,
    image: "./kivu-image/mountain-bike-1.jpg",
    title: "Mountain Karongi Bike Full Day",
    description:
      "The Mountain Karongi Bike Adventure was a memorable 50 km journey through Rwanda’s Western Province, blending physical challenge, natural beauty, and cultural exploration.",
  },
  {
    id: 14,
    image: "./kivu-image/Dawn-dust-insect.jpg",
    title: "The Dawn/Dusk Insects Experience",
    description:
      "The Dawn/Dusk Insects Experience around Lake Kivu offers a unique sensory journey into the natural world.",
  },
  {
    id: 15,
    image: "./kivu-image/swimming-cow-1.jpg",
    title: "Swimming Cows Experience ",
    description:
      "The swimming cows of Mafundugu Island in Lake Kivu have become a captivating natural phenomenon.",
  },
  {
    id: 16,
    image: "./kivu-image/mountain-bike-2.jpg",
    title: "Cit Tour Experience",
    description:
      "Embark on a biking and hiking adventure along the Kivu Belt Road, an immersive journey through Rwanda's stunning West Province.",
  },
  {
    id: 17,
    image: "./kivu-image/local-culture-2.jpg",
    title: "Rwanda Culture And History",
    description:
      'Rwanda, often referred to as the "Land of a Thousand Hills," is a captivating destination offering a blend of breathtaking natural landscapes and rich cultural experiences.',
  },
  {
    id: 18,
    image: "./kivu-image/residential.jpg",
    title: "Accomodation And Car Rentals In Kibuye Rwanda",
    description:
      "Nestled along the picturesque shores of Lake Kivu, Kibuye is a serene and captivating town in Rwanda's Western Province.",
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
      "sm:w-full"
    );
    cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.title}" class="text-center w-full object-cover" style="height:30vh;filter: brightness(1.2)">
                <div class="p-5">
                    <h3 class="text-xl font-bold">${card.title}</h3>
                    <p class="text-gray-600 mt-2">${card.description}</p>
                    <a href='javascript:void(0)' id='Learnmore-${card.id}' class="text-blue-500 mt-6 inline-block rounded border-2 p-2 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300">Learn More...</a>
                </div>
            `;
    // Append the card to the container
    container.appendChild(cardElement);
  });
}
// Call the function to create and insert cards into the DOM
createCards();
// Define the mapping of IDs to URLs
const pageLinks = {
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
  "Learnmore-13": "details-pages/karongi-mountain-full-day.html",
  "Learnmore-14": "details-pages/the-dawn-dusk-Insects-experience.html",
  "Learnmore-15": "details-pages/Swimming-Cows-Experience.html",
  "Learnmore-16": "details-pages/city-tour-experience.html",
  "Learnmore-17": "details-pages/Rwanda-Culture-And-History.html",
  "Learnmore-18":
    "details-pages/Accomodation-And-Car-Rentals-In-Kibuye-Rwanda.html",
};
// Add event listeners to buttons
document.querySelectorAll('[id^="Learnmore-"]').forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const buttonId = button.id; // Get the button's ID
    const pageId = this.id; // Get the button's ID (e.g., "Learnmore-1")
    const targetPage = pageLinks[buttonId]; // Get the corresponding URL
    if (targetPage) {
      window.location.href = targetPage; // Navigate to the URL
    } else {
      console.error("No page found for this button ID:", buttonId);
      console.error("the page you navigated ha id of :", pageId);
    }
  });
});
// about learn more
document.getElementById("learnMoreBtn").addEventListener("click", () => {
  const moreContent = document.getElementById("moreContent");
  if (moreContent.classList.contains("hidden")) {
    moreContent.classList.remove("hidden");
    moreContent.classList.add("block");
  } else {
    moreContent.classList.remove("block");
    moreContent.classList.add("hidden");
  }
});
// translate our whole page
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',  // Default language
    includedLanguages: 'en,fr,es,de,it,pt,ru',  // Languages to show in the dropdown
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE  // Simple dropdown layout
  }, 'google_translate_element');
}

// Button click handler
const buttonTranslate = document.querySelector('#translate-dropdown');
const languages = document.querySelector('#google_translate_element');
buttonTranslate.addEventListener('click', (event) => {
  event.preventDefault();
  // Toggle visibility of the language dropdown
  languages.classList.toggle('active');
});
 // Detect when a language is selected
 const observer = new MutationObserver(() => {
  // Check if a new language is selected by monitoring changes in the dropdown's menu
  const selectedLanguage = document.querySelector('.goog-te-menu-value');
  if (selectedLanguage && selectedLanguage.innerText !== 'Select Language') {
    // Close the dropdown after language selection
    languages.classList.remove('active');
  }
});

// Observe changes in the Google Translate element
observer.observe(document.querySelector('#google_translate_element'), {
  childList: true, 
  subtree: true
})