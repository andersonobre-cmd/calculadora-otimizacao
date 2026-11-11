console.log('Calculadora de Otimização carregada com sucesso!');

document.addEventListener("DOMContentLoaded", () => {
    const inputA = document.getElementById("coefA");
    const inputB = document.getElementById("coefB");
    const inputC = document.getElementById("coefC");
    const inputX = document.getElementById("pontoX");
    const botaoCalcular = document.getElementById("calcularBtn");
    const caixaResultado = document.getElementById("resultado");

    botaoCalcular.addEventListener("click", () => {
        const a = parseFloat(inputA.value);
        const b = parseFloat(inputB.value);
        const c = parseFloat(inputC.value);

        // Validações básicas
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            caixaResultado.innerHTML = "Por favor, preencha os coeficientes a, b e c!";
            caixaResultado.style.color = "#e74c3c";
            return;
        }

        if (a === 0) {
            caixaResultado.innerHTML = "O coeficiente 'a' não pode ser zero (não é função quadrática)!";
            caixaResultado.style.color = "#e74c3c";
            return;
        }

        // Cálculo do Vértice (Ponto Ótimo): Xv = -b / (2*a) e Yv = f(Xv)
        const xVértice = -b / (2 * a);
        const yVértice = (a * Math.pow(xVértice, 2)) + (b * xVértice) + c;
        
        // Identifica se é Máximo (a < 0) ou Mínimo (a > 0)
        const tipoOtimo = a < 0 ? "Ponto de Máximo" : "Ponto de Mínimo";

        // Monta o texto base do resultado da otimização
        let htmlResultado = `
            <strong>Resultado da Otimização:</strong><br>
            • Tipo: <strong>${tipoOtimo}</strong><br>
            • Coordenada Ótima: x = ${xVértice.toFixed(2)}<br>
            • Valor Ótimo f(x): ${yVértice.toFixed(2)}<br>
        `;

        // Se o usuário digitou um valor em x para avaliar a função naquele ponto específico
        const valorX = inputX.value.trim();
        if (valorX !== "") {
            const xDesejado = parseFloat(valorX);
            if (!isNaN(xDesejado)) {
                const fDesejado = (a * Math.pow(xDesejado, 2)) + (b * xDesejado) + c;
                htmlResultado += `<br><strong>Avaliação no ponto x = ${xDesejado}:</strong><br>• f(${xDesejado}) = ${fDesejado.toFixed(2)}`;
            }
        }

        caixaResultado.innerHTML = htmlResultado;
        caixaResultado.style.color = "#27ae60";
    });
});