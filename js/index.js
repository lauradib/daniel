document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    const errorMessage = document.getElementById('errorMessage');
    const container = document.querySelector('.container');
    const explosion = document.getElementById('explosion');

    if (nameInput.toLowerCase() === 'daniel') {
        container.classList.add('hidden');
        explosion.classList.remove('hidden');
    } else {
        errorMessage.textContent = 'Nome incorreto! Por favor, digite o nome correto.';
    }
});