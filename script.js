document.getElementById('recoverBtn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (validateEmail(email)) {
        message.textContent = 'Recovery email has been sent!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
