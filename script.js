document.getElementById('changeTextBtn').addEventListener('click', function() {
    const section = document.querySelector('section');
    section.querySelector('p').textContent = 'Você clicou no botão! Texto alterado.';
});

