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

        // 1. Cálculo do Vértice (Ponto Ótimo)
        const xVértice = -b / (2 * a);
        const yVértice = (a * Math.pow(xVértice, 2)) + (b * xVértice) + c;
        const tipoOtimo = a < 0 ? "Ponto de Máximo" : "Ponto de Mínimo";

        // 2. Cálculo do Discriminante (Delta)
        const delta = Math.pow(b, 2) - (4 * a * c);

        // Monta o texto base do resultado
        let htmlResultado = `
            <strong>Resultado da Otimização:</strong><br>
            • Tipo: <strong>${tipoOtimo}</strong><br>
            • Coordenada Ótima (Vértice): x = ${xVértice.toFixed(2)}, f(x) = ${yVértice.toFixed(2)}<br><br>
            <strong>Análise do Discriminante (Delta):</strong><br>
            • Delta ($\Delta$) = ${delta.toFixed(2)}<br>
        `;

        // Avaliação das raízes com base no Delta
        if (delta > 0) {
            const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
            const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
            htmlResultado += `• Raízes Reais: x₁ = ${raiz1.toFixed(2)} e x₂ = ${raiz2.toFixed(2)} (Cruza o eixo X em 2 pontos)<br>`;
        } else if (delta === 0) {
            const raizUnica = -b / (2 * a);
            htmlResultado += `• Raiz Real Única: x = ${raizUnica.toFixed(2)} (Toca o eixo X no vértice)<br>`;
        } else {
            htmlResultado += `• Sem raízes reais (Não intercepta o eixo X)<br>`;
        }

        // 3. Se o usuário digitou um valor em x para avaliar a função especificamente
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