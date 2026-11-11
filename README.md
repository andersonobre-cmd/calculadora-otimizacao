# Calculadora de Otimização Matemática

> Projeto desenvolvido como parte de atividade prática integrando programação web, matemática aplicada e controle de versão com Git e GitHub.

## 🚀 Sobre o Projeto
A **Calculadora de Otimização** é uma ferramenta web interativa desenvolvida para auxiliar no estudo e resolução de funções quadráticas. Ela permite calcular automaticamente o ponto ótimo (vértice da parábola), classificar se o ponto é de máximo ou de mínimo, além de realizar a análise completa do discriminante ($\Delta$) e das raízes reais da função.

---

## ✨ Funcionalidades
* **Cálculo do Vértice (Ponto Ótimo):** Determina as coordenadas $(X_v, Y_v)$ do vértice da parábola.
* **Classificação Automática:** Identifica se o ponto crítico representa um **Ponto de Máximo** ($a < 0$) ou um **Ponto de Mínimo** ($a > 0$).
* **Análise do Discriminante ($\Delta$):** Calcula o Delta e aponta a quantidade de interseções com o eixo $X$.
* **Cálculo de Raízes (Bhaskara):** Exibe as raízes reais quando existentes.
* **Avaliação de Pontos Personalizados:** Permite calcular o valor de $f(x)$ para qualquer ponto desejado pelo usuário.

---

## 🛠️ Pré-requisitos
Antes de executar o projeto na sua máquina, certifique-se de ter instalado:
* Um editor de código (recomenda-se o [VS Code](https://github.com/andersonobre-cmd/calculadora-otimizacao)).
* Um navegador web moderno (Google Chrome, Firefox, Edge, etc.).
* A extensão **Live Server** instalada no VS Code (opcional, mas recomendado para atualização automática).

---

## 📥 Como Executar
1. Clone este repositório para o seu computador:
   ```bash
   git clone [https://github.com/andersonobre-cmd/calculadora-otimizacao.git](https://github.com/andersonobre-cmd/calculadora-otimizacao.git)

## 💻 Tecnologias Utilizadas
* HTML5: Estrutura e marcação semântica dos elementos da página.

* CSS3: Estilização responsiva, layout centralizado e design moderno.

* JavaScript (ES6+): Lógica matemática de otimização (vértice da parábola, classificação de máximo/mínimo e cálculo do discriminante Delta) e manipulação do DOM.

* Git & GitHub: Controle de versionamento de código e hospedagem do repositório remoto.

## 💻 Instruções de Uso

* Preencha os 3 primeiros campos com os coeficientes a (a tem que ser necessariamente diferente de 0), b e c da função quadrática, respectivamente. Esses três campos são obrigatórios.

* Em seguida, se desejar saber o valor da função para um dado valor de x, basta incluir esse valor no quarto campo que calcula o valor de f(x) dado um valor de x (esse campo não é obrigatório).

* Logo abaixo do quarto campo, após o preenchimento, você deve clicar no botão Calcular Otimização. O resultado com todas as informações listadas, aparecerá logo abaixo do botão de calcular.