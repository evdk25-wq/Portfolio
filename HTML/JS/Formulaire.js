// Function to validate the contact form before submission
function validateForm() {
    // Get values from input fields
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if name is empty
    if (name.trim() == '') {
        alert('Entrez votre nom');
        return false;
    }

    // Check if phone number is empty
    if (phone.trim() == '') {
        alert('Entrez votre numéro de téléphone');
        return false;
    }

    // Check if email is empty
    if (email.trim() == '') {
        alert('Votre email');
        return false;
    }

    // Check if message is empty
    if (message.trim() == '') {
        alert('Votre message');
        return false;
    }

    // All fields are filled, return true for form submission
    return true;
}