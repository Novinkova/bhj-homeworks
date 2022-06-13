const getHole = function(index) {
  return document.getElementById(`hole${index}`);
}
let dead  = document.getElementById("dead");
let lost  = document.getElementById("lost")

for (let i = 1; i <= 9; i++) {
  let game = getHole(i);
  let contains = getHole(i).className.includes("hole_has-mole");

  game.onclick = function () {
    if (contains) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if (dead.textContent == 10) {
      alert('You win!');

      dead.textContent = 0;
      lost.textContent = 0;
    } else if (lost.textContent == 5) {
      alert('You lose!');

      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}
