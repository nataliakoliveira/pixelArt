const paleta1 = document.querySelectorAll('div.color')[0];
paleta1.style.backgroundColor = 'black';
const paleta2 = document.querySelectorAll('div.color')[1];
paleta2.style.backgroundColor = 'yellow';
const paleta3 = document.querySelectorAll('div.color')[2];
paleta3.style.backgroundColor = '#FF00FF';
const paleta4 = document.querySelectorAll('div.color')[3];
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

window.onload = document.createElement('selected');