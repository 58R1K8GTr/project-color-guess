// criando elementos.
const pAnswerStrong = document.createElement('strong');

// obtendo os elementos.
const headerH1 = document.querySelector('#title');
const pRGBColor = document.querySelector('#rgb-color');
const ballsDiv = document.querySelector('#balls-div');
const pAnswer = document.querySelector('#answer');
const buttonResetGame = document.querySelector('#reset-game');
const pScore = document.querySelector('#score');

// configurando os elementos.
pAnswerStrong.innerText = 'Escolha uma cor';
pAnswer.appendChild(pAnswerStrong);
buttonResetGame.innerText = 'resetar o jogo';
pScore.innerText = 'Placar: 0';

// código.
const colors = ['green', 'black', 'purple', 'red', 'blue', 'orange', 'gray', 'yellow'];
for (let indexSpan = 0; indexSpan < headerH1.children.length; indexSpan += 1) {
  const span = headerH1.children[indexSpan];
  span.style.color = colors[(indexSpan % 7)];
}

function randomNumber(length) {
  return Math.floor(Math.random() * length);
}

function randomColor() {
  return `(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
}

randomColorString = randomColor();
pRGBColor.innerText = randomColorString;

for (let indexDiv = 0; indexDiv < 6; indexDiv += 1) {
  const div = document.createElement('div');
  div.classList.add('ball');
  div.style.backgroundColor = 'rgb' + randomColor();
  ballsDiv.appendChild(div);
}

function choiceTheRightDiv() {
  const oldDiv = document.querySelector('.rightDiv');
  if (oldDiv) {
    oldDiv.classList.remove('rightDiv');
  }
  const div = ballsDiv.children[randomNumber(5)];
  div.style.backgroundColor = 'rgb' + randomColorString;
  div.classList.add('rightDiv')
}

choiceTheRightDiv();

let score = 0;

function divChoiced(event) {
  if (event.target.classList.contains('rightDiv')) {
    pAnswerStrong.innerText = 'Acertou!';
    score += 3;
  } else {
    pAnswerStrong.innerText = 'Errou! Tente novamente!';
    score -= 1;
  }
  pScore.innerText = `Placar: ${score}`
}

for (let indexDiv = 0; indexDiv < ballsDiv.children.length; indexDiv += 1) {
  const div = ballsDiv.children[indexDiv];
  div.addEventListener('click', divChoiced);
}

function changeColorDivs() {
  for (let indexDiv = 0; indexDiv < ballsDiv.children.length; indexDiv += 1) {
    const div = ballsDiv.children[indexDiv];
    div.style.backgroundColor = 'rgb' + randomColor();
  }
}

function resetGame() {
  randomColorString = randomColor();
  pRGBColor.innerText = randomColorString;
  changeColorDivs();
  choiceTheRightDiv();
  pAnswerStrong.innerText = 'Escolha uma cor';
}

buttonResetGame.addEventListener('click', resetGame);