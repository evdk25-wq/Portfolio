
function validateForm() {
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    
    if (name.trim() == '') {
        alert('Entrez votre nom');
        return false;
    }

    
    if (phone.trim() == '') {
        alert('Entrez votre numéro de téléphone');
        return false;
    }

    
    if (email.trim() == '') {
        alert('Votre email');
        return false;
    }

    
    if (message.trim() == '') {
        alert('Votre message');
        return false;
    }

    
    return true;
}