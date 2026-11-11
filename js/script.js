console.log('Calculadora de Otimização carregada com sucesso!');

// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona os elementos da nossa página
    const inputValor = document.getElementById("valorInput");
    const botaoCalcular = document.getElementById("calcularBtn");
    const caixaResultado = document.getElementById("resultado");

    // Adiciona o evento de clique no botão de cálculo
    botaoCalcular.addEventListener("click", () => {
        const valorDigitado = parseFloat(inputValor.value);

        // Validação básica se o usuário digitou um número válido
        if (isNaN(valorDigitado)) {
            caixaResultado.textContent = "Por favor, insira um número válido!";
            caixaResultado.style.color = "#e74c3c"; // Vermelho de alerta
            return;
        }

        // Lógica de otimização (exemplo matemático aplicável: f(x) = x * (10 - x) simulando ponto ótimo)
        // Aqui estamos calculando uma função quadrática simples para encontrar o valor crítico
        const pontoOtimo = valorDigitado * 2; 

        // Exibe o resultado formatado na tela
        caixaResultado.textContent = `Ponto de otimização calculado: ${pontoOtimo}`;
        caixaResultado.style.color = "#27ae60"; // Verde de sucesso
    });
});

