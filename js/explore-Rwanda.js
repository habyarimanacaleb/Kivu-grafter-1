const mtbTourData = [
  {
    id: 1,
    title: "Day 1: Kigali to Jari",
    description:
      "Beginner-friendly trails through rolling hills, terraced farmlands, and local villages, offering an immersive experience of Rwanda’s rural life.",
    image: "./images/day1.jpg", // Replace with the actual image path
  },
  {
    id: 2,
    title: "Day 2-3: Jari to Musanze",
    description:
      "Challenge yourself in the volcanic terrain of Musanze, with stunning views of the Virunga Mountains and options to visit gorillas or cultural sites.",
    image: "./images/day2-3.jpg", // Replace with the actual image path
  },
  {
    id: 3,
    title: "Day 4-5: Musanze to Rubavu",
    description:
      "Cycle along the picturesque Congo Nile Trail by Lake Kivu, with forested paths, lakeside villages, and breathtaking views.",
    image: "./images/day4-5.jpg", // Replace with the actual image path
  },
  {
    id: 4,
    title: "Day 6: Mount Karongi Full-Day Trail",
    description:
      "End your adventure with a challenging ride around Mount Karongi, featuring stunning vistas, steep climbs, and scenic waterfalls.",
    image: "./images/day6.jpg", // Replace with the actual image path
  },
];

const tourCardsContainer = document.getElementById("mtbTourCards");

mtbTourData.forEach((tour) => {
  const card = document.createElement("div");
  card.classList.add(
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "overflow-hidden",
    "hover:scale-105",
    "transition-transform",
    "duration-300"
  );

  card.innerHTML = `
    <div class="p-4">
      <h3 class="text-xl font-bold mb-2">${tour.title}</h3>
      <p class="text-gray-600">${tour.description}</p>
    </div>
  `;

  tourCardsContainer.appendChild(card);
});
