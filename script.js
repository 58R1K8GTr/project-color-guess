// obtendo os elementos.
const headerH1 = document.querySelector('#title');
const pRGBColor = document.querySelector('#rgb-color');

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

pRGBColor.innerText = randomColor();