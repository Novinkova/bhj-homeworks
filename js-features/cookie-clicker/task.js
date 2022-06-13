const image = document.getElementById('cookie');
const click = document.getElementById('clicker__counter');
let bigSize = '300';
let smallSize = '200';

function changeSize() {

  if (image.width == bigSize) {
    image.width = smallSize;
  } else image.width = bigSize;

  click.textContent++;
}

image.onclick = changeSize;