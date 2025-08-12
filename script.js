document.addEventListener('DOMContentLoaded', () => {
    // Ação do botão "Saiba Mais"
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    btnSaibaMais.addEventListener('click', () => {
        alert('Você clicou no botão "Saiba Mais"! Aqui você poderia redirecionar para outra página.');
    });

    // Ação do formulário
    const formulario = document.getElementById('formulario-contato');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (nome && email) {
            console.log(`Dados enviados: Nome - ${nome}, Email - ${email}`);
            alert('Obrigado por se cadastrar! Seus dados foram enviados com sucesso.');
            formulario.reset(); // Limpa o formulário
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });
});