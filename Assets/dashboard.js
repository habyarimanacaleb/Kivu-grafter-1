// Select sidebar buttons and main content sections
const dashboardHomeBtn = document.getElementById('dashboardHomeBtn');
const manageServicesBtn = document.getElementById('manageServicesBtn');
const usersBtn = document.getElementById('usersBtn');
const testimonialsBtn = document.getElementById('testimonialsBtn');
const reviewsBtn = document.getElementById('reviewsBtn');
const queriesBtn = document.getElementById('queriesBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Sections
const dashboardHomeSection = document.getElementById('dashboardHome');
const manageServicesSection = document.getElementById('manageServices');
const viewUsersSection = document.getElementById('viewUsers');
const manageTestimonialsSection = document.getElementById('manageTestimonials');
const viewReviewsSection = document.getElementById('viewReviews');
const contactQueriesSection = document.getElementById('contactQueries');

// Utility to hide all sections
const hideAllSections = () => {
  const sections = [
    dashboardHomeSection,
    manageServicesSection,
    viewUsersSection,
    manageTestimonialsSection,
    viewReviewsSection,
    contactQueriesSection,
  ];
  
  sections.forEach((section) => {
    section.classList.add('hidden');
  });
};

// Event Listeners for Sidebar Buttons
dashboardHomeBtn.addEventListener('click', () => {
  hideAllSections();
  dashboardHomeSection.classList.remove('hidden');
});

manageServicesBtn.addEventListener('click', () => {
  hideAllSections();
  manageServicesSection.classList.remove('hidden');
});

usersBtn.addEventListener('click', () => {
  hideAllSections();
  viewUsersSection.classList.remove('hidden');
});

testimonialsBtn.addEventListener('click', () => {
  hideAllSections();
  manageTestimonialsSection.classList.remove('hidden');
});

reviewsBtn.addEventListener('click', () => {
  hideAllSections();
  viewReviewsSection.classList.remove('hidden');
});

queriesBtn.addEventListener('click', () => {
  hideAllSections();
  contactQueriesSection.classList.remove('hidden');
});

// Logout Button Functionality
logoutBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to logout?')) {
    // Replace this with actual logout functionality
    alert('Logged out successfully!');
  }
});

// Show Dashboard Home by default on page load
hideAllSections();
dashboardHomeSection.classList.remove('hidden');

//create new services
document.getElementById('createServicePageBtn').addEventListener('click', async (e) => {
e.preventDefault();
  window.location.href = '/Assets/create-new-service.html';
});
