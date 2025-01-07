let currentSlideIndex = 0;

async function fetchContactsAsSlides() {
  try {
    const response = await axios.get('https://web-app-back-end.onrender.com/api/contacts');
    const contacts = response.data;

    const slider = document.getElementById('contactSlider');
    slider.innerHTML = '';

    if (contacts.length === 0) {
      slider.innerHTML = '<p class="text-gray-500">No contacts available.</p>';
      return;
    }

    contacts.forEach((contact) => {
      const slide = document.createElement('div');
      slide.classList.add(
        'flex-shrink-0',
        'w-48',
        'h-full',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'bg-gray-100',
        'rounded-lg',
        'p-6',
        'text-center'
      );
      slide.innerHTML = `
        <h4 class="text-lg font-bold">${contact.name}</h4>
        <p class="text-gray-600"><strong>Email:</strong> ${contact.email}</p>
        <p class="text-gray-600 mt-2">${contact.message}</p>
      `;
      slider.appendChild(slide);
    });

    currentSlideIndex = 0; // Reset index
    updateSlider(); // Update slider
  } catch (error) {
    console.error('Error fetching contacts:', error);
    const slider = document.getElementById('contactSlider');
    slider.innerHTML = '<p class="text-red-500">Failed to load contact information.</p>';
  }
}

function updateSlider() {
  const slider = document.getElementById('contactSlider');
  const totalSlides = slider.children.length;

  if (totalSlides === 0) return;

  slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

const prevSlideButton = document.getElementById('prevSlide');
const nextSlideButton = document.getElementById('nextSlide');

if (prevSlideButton && nextSlideButton) {
  prevSlideButton.addEventListener('click', () => {
    const totalSlides = document.getElementById('contactSlider').children.length;
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextSlideButton.addEventListener('click', () => {
    const totalSlides = document.getElementById('contactSlider').children.length;
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSlider();
  });
}

document.getElementById('queriesBtn').addEventListener('click', () => {
  document.getElementById('contactQueries').classList.remove('hidden');
  fetchContactsAsSlides();
});
