function  formSubmit() {
    alert("Az űrlap elküldésre került");
}

function validateForm() {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    if (name.value.length < 5) {
        alert('A név nem lehet kevesebb mint 5 karakter');
    } else if (((email.value.indexOf("@")) || (email.value.indexOf("."))) < 0) {
        alert('Az email cím nem érvényes');
    } else if (message.value.length < 20) {
        alert('Az üzenet nem lehet kevesebb mint 20 karakter');
    } else {
        formSubmit();
    }
}

