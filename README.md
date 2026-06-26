# 🎨 Color Guess (Adivinhe a Cor)

Um jogo interativo de adivinhação focado em testar e aprimorar suas habilidades de leitura do modelo de cores **RGB** (Red, Green, Blue). O jogo gera códigos de cores aleatórios e desafia o usuário a encontrar a bola correspondente.

---

## 🎮 Como Jogar e Regras

1. O jogo exibe um código de cor no formato padrão `RGB(R, G, B)` no topo da tela.
2. Abaixo do código, existem 6 círculos coloridos com cores geradas aleatoriamente.
3. **Seu objetivo:** Clicar no círculo que corresponde exatamente ao código RGB exibido.
4. **Sistema de Pontuação (Placar):**
   * **Acertou!** Você ganha **+2 pontos** no placar.
   * **Errou!** Você perde **-1 ponto** no placar.
5. **Botão Resetar o Jogo:** Gera uma nova rodada com combinações de cores inéditas para você continuar jogando, mas mantém a sua pontuação atual para que você possa acumular recordes.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação dos elementos do jogo, do placar e dos botões de interação.
* **CSS3:** Estilização visual (efeitos circulares nas cores, fontes customizadas e layout centralizado).
* **JavaScript (ES6):** Geração de números aleatórios para os canais RGB, controle de estado do placar, validação de cliques e manipulação dinâmica de classes do DOM para exibir as mensagens de acerto/erro.

---

## 🔧 Como Clonar e Instalar o Projeto

Certifique-se de ter o [Git](https://git-scm.com/) e o [Node.js](https://nodejs.org/) instalados no seu sistema. Execute no terminal:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/58R1K8GTr/color-guess.git](https://github.com/58R1K8GTr/color-guess.git)