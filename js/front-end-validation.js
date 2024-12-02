// Get the form element
const form = document.getElementById('contact-form-data');

// Add submit event listener
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form default submission

    // Get form values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    try {
        console.log('Form is submitted');

        // Check for empty fields
        if (!name || !email || !message) {
            alert('All fields are required!');
        } else {
            alert('Thank you for your query/question!');
            alert(`Your data is recorded well: ${name}`);
        }
    } catch (error) {
        alert('There is an error in form submission');
    }

    // Reset the form
    form.reset();
});
