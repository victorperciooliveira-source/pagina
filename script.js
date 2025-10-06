
const visor = document.getElementById('visor');

// Função para adicionar números e operadores ao visor
function adicionar(valor) {
    visor.value += valor;
}

// Função para limpar completamente o visor
function limparVisor() {
    visor.value = '';
}

// Função para apagar o último caractere
function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

// Função para calcular o resultado
function calcular() {
    try {
        // O método eval() é usado para avaliar a expressão matemática como código
        // É simples para este projeto, mas CUIDADO: em projetos reais, é
        // melhor usar uma biblioteca ou implementar sua própria lógica de parsing
        // para garantir a segurança.
        
        // Substitui "x" por "*" (multiplicação) para o eval() entender
        let expressao = visor.value.replace(/x/g, '*'); 

        // Adiciona uma verificação para a expressão não ficar vazia ou inválida
        if (expressao) {
            visor.value = eval(expressao);
        }
        
    } catch (e) {
        // Se a expressão for inválida (ex: 5++), mostra "Erro"
        visor.value = 'Erro';
    }
}
