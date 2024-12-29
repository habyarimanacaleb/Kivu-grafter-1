document.getElementById('contactForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  try {
    const response = await fetch('https://web-app-back-end.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    } else {
      alert('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message');
  }
});