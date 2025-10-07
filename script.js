
// Pega o elemento do visor pelo ID
const visor = document.getElementById('visor');

/**
 * Adiciona o valor do botão clicado ao visor, com algumas validações.
 * @param {string} valor O número ou operador clicado.
 */
function adicionarAoVisor(valor) {
    // 1. Evita começar com operador (exceto sinal de menos)
    if (visor.value === '' && isNaN(valor) && valor !== '-') {
        return; 
    }
    
    // 2. Evita múltiplos operadores seguidos (substitui o operador anterior)
    const ultimoChar = visor.value.slice(-1);
    if (isNaN(valor) && isNaN(ultimoChar) && valor !== '.') {
        visor.value = visor.value.slice(0, -1) + valor;
        return;
    }

    // 3. Evita múltiplos pontos em um número
    if (valor === '.') {
        // Expressão regular que divide por qualquer operador (+, -, *, /)
        const partes = visor.value.split(/[\+\-\*\/]/); 
        const numeroAtual = partes[partes.length - 1];
        if (numeroAtual.includes('.')) {
            return;
        }
    }

    visor.value += valor;
}

/**
 * Limpa o visor.
 */
function limparVisor() {
    visor.value = '';
}

/**
 * Apaga o último caractere do visor (função Backspace).
 */
function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

/**
 * Calcula o resultado da expressão no visor usando eval().
 */
function calcular() {
    try {
        // Remove operadores soltos no final (ex: "5 +")
        let expressao = visor.value.replace(/[\+\-\*\/]$/g, '');
        
        // Substitui os símbolos de exibição pelos de cálculo
        expressao = expressao.replace(/×/g, '*').replace(/÷/g, '/');
        
        // **IMPORTANTE SOBRE EVAL()**: 
        // Embora seja a maneira mais rápida para uma calculadora simples, 
        // em aplicações reais, é recomendado criar uma lógica de cálculo 
        // mais segura para evitar riscos de segurança.
        let resultado = eval(expressao);
        
        // Corrige problemas de precisão do ponto flutuante, se necessário
        if (resultado.toString().includes('.') && resultado.toString().split('.')[1].length > 4) {
             resultado = parseFloat(resultado.toFixed(4));
        }

        visor.value = resultado;

    } catch (e) {
        // Exibe "Erro" para expressões inválidas
        visor.value = 'Erro';
    }
}
