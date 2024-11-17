
    // Example data for the cards (you can fetch this data from an API or define it locally)
    const cardsData = [
        {
            image: 'https://via.placeholder.com/300',
            title: 'Lake Kivu Tour',
            description: 'Enjoy a scenic tour around Lake Kivu with breathtaking views.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Gisenyi Adventure',
            description: 'Explore the beautiful city of Gisenyi, known for its hot springs.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Kibuye Exploration',
            description: 'Discover the cultural and natural beauty of Kibuye.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Gitesi Nature Walk',
            description: 'Take a walk through the beautiful Gitesi nature reserve.'
        }
    ];

    // Get the container where the cards will be inserted
    const container = document.querySelector('.service-container');

    // Function to create and display cards
    function createCards() {
        cardsData.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'transform', 'hover:scale-105', 'transition-transform', 'duration-300');

            cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.title}" class="w-full h-48 object-cover">
                <div class="p-5">
                    <h3 class="text-xl font-bold">${card.title}</h3>
                    <p class="text-gray-600 mt-2">${card.description}</p>
                    <a href="#" class="text-blue-500 mt-4 inline-block hover:text-blue-700">Learn More</a>
                </div>
            `;

            // Append the card to the container
            container.appendChild(cardElement);
        });
    }

    // Call the function to create and insert cards into the DOM
    createCards();

