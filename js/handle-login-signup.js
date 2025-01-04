/// login
document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    try {
      const response = await fetch('https://web-app-back-end.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Login successful!');
        window.location.href = 'index.html';
      } else {
        alert('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to login');
    }
  });
  ///sign up
  document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    try {
      const response = await fetch('https://web-app-back-end.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Sign up successful!');
        window.location.href = 'login.html';
      } else {
        alert('Failed to sign up');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to sign up');
    }
  });