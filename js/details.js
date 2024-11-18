const servicesData = [
    {   id:1,
        image: './Kivu-image/six-island.jpg',
        title: 'Six Island Tour',
        description: 'Embark on an unforgettable journey across Lake Kivu’s stunning islands.',
        link: 'six-island.html'
    },
    {
        id:2,
        image: './Kivu-image/night-fishing.jpg',
        title: 'Night Fishing with Singing Fishermen',
        description: 'Experience magical cultural nights with the singing fishermen.',
        link: 'night-fishing.html'
    },
    {
        id:3,
        image: './Kivu-image/hiking.jpg',
        title: 'Karongi Mountains Biking and Hiking',
        description: 'Enjoy breathtaking trails through Karongi’s picturesque mountains.',
        link: 'biking-hiking.html'
    },
    {
        id:4,
        image: './Kivu-image/local-tours.jpg',
        title: 'Local Cultural and Geographical Tours',
        description: 'Discover the rich culture and geographical beauty of the region.',
        link: 'local-tours.html'
    },
    {
        id:5,
        image: '../Kivu-image/long-trip.jpg',
        title: 'Long Trip Kibuye to Gisenyi with Boat',
        description: 'Enjoy a scenic boat trip from Kibuye to Gisenyi on Lake Kivu.',
        link: 'long-trip.html'
    }
];
const servicesContainer = document.getElementById("services-container");

function renderServices(data) {
    servicesContainer.innerHTML = ""; // Clear existing content
    data.forEach((service) => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add(
            "service-card",
            "rounded-lg",
            "shadow-lg",
            "overflow-hidden",
            "hover:scale-105",
            "transition-transform",
            "duration-300"
        );
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}" class="w-full object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
                <a href="service-detail.html?id=${service.id}" class="text-blue-500 hover:underline mt-2 block">Learn More</a>
            </div>
        `;
        servicesContainer.appendChild(serviceCard);
    });
}
// Render the services data
renderServices(servicesData);
