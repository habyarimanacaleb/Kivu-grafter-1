// Fetch cards data from the backend
async function fetchCards() {
  try{
    const response = await fetch("http://localhost:3000/api/cards");

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
  
    const services = await response.json();
    const container = document.querySelector('.service-container');
    if (services.length === 0) {
      container.innerHTML =
        '<p class="text-gray-700 text-center">No services available yet.</p>';
      return;
  }

  } catch (err) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = "Error: " + err.message;
    errorMessage.classList.remove("hidden");
  }
  }
  
  // Function to create and display cards
  function createCards(cardsData) {
    const container = document.querySelector('.service-container');
       cardsData.forEach((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add(
        'card',
        'bg-white',
        'rounded-lg',
        'shadow-md',
        'overflow-hidden',
        'transform',
        'hover:scale-105',
        'transition-transform',
        'duration-300',
        'p-5',
        'sm:w-full'
      );
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}" class="text-center w-full object-cover" style="height:30vh;filter: brightness(1.2)">
        <div class="p-5">
          <h3 class="text-xl font-bold">${card.title}</h3>
          <p class="text-gray-600 mt-2">${card.description}</p>
          <a href="${card.detailPage}" class="text-blue-500 mt-6 inline-block rounded border-2 p-2 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300">Learn More...</a>
        </div>
      `;
      container.appendChild(cardElement);
    });
  }
  
  // Call the function to fetch and render cards
  fetchCards();