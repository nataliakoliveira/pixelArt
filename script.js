const paleta1 = document.querySelectorAll('.color')[0];
paleta1.style.backgroundColor = 'black';
const paleta2 = document.querySelectorAll('.color')[1];
paleta2.style.backgroundColor = 'yellow';
const paleta3 = document.querySelectorAll('.color')[2];
paleta3.style.backgroundColor = '#FF00FF';
const paleta4 = document.querySelectorAll('.color')[3];
paleta4.style.backgroundColor = 'green';

const pixelBoard = document.getElementById('pixel-board');
function GradeDePixels() {
  for (let i = 1; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
GradeDePixels();
// selecionar cor e aplicar nos pixels
document.addEventListener('click', (event) => {
  const corSelecionada = document.querySelector('.selected');
  const select = event.target;
  if (event.target.classList.contains('pixel')) { // Verifica se o valor da classe especificada existe no atributo de classe do elemento.
    // eslint-disable-next-line max-len
    const computedStyle = window.getComputedStyle(corSelecionada).getPropertyValue('background-color'); // https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
    select.style.backgroundColor = computedStyle;
  }
  if (event.target.classList.contains('color')) {
    const classeColor = event.target;
    corSelecionada.classList.remove('selected');
    // eslint-disable-next-line no-useless-concat
    classeColor.className += ' ' + ('selected');
  }
});
// trocar cor do plano de fundo
const btn = document.querySelector('#button2');
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
// eslint-disable-next-line func-names
btn.onclick = function () {
  const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};

// limpar
const pixelArt = document.getElementsByClassName('pixel');
function limpar() {
  for (let index = 0; index < pixelArt.length; index += 1) {
    pixelArt[index].style.backgroundColor = 'white';
  }
}
const button = document.getElementById('clear-board');
button.addEventListener('click', limpar);

limpar();
