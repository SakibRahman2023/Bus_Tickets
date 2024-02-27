document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('num');
    const button = document.getElementById('btn');

    button.style.opacity = '0.2'; 

    inputField.addEventListener('input', function () {
        if (inputField.value.trim() !== '' && !isNaN(inputField.value)) {
            button.disabled = false;
            button.style.opacity = '1'; 
        } else {
            button.disabled = true;
            button.style.opacity = '0.2'; 
        }
    });
});
