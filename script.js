// obtendo os elementos.
const headerH1 = document.querySelector('#title');
const pRGBColor = document.querySelector('#rgb-color');
const ballsDiv = document.querySelector('#balls-div');

// configurando os elementos.

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
  ballsDiv.appendChild(div);
}