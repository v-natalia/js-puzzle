// todo
  // const numbers = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";
const hintButton = document.getElementById("show-hint");
// console.log(hintButton);

hintButton.addEventListener('click', () => {
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
});


const canMove = (tile) => {
//
const col = tile.cellIndex;
const row = tile.parentElement.rowIndex;
// console.log('col', col, 'row', row);

const empty = document.querySelector(".empty");
const colEmpty = empty.cellIndex;
const rowEmpty = empty.parentElement.rowIndex;
// console.log("col empty", colEmpty, "row empty", rowEmpty);

if (col === colEmpty && Math.abs(row - rowEmpty) === 1) {
  return true;
}
if (row === rowEmpty && Math.abs(col - colEmpty) === 1 ) {
  return true;
}
return false;
};

const move = (tile) => {
  const prevEmpty = document.querySelector(".empty");
  // ajoute la class empty a la tile que on a clicque
  tile.classList.add('empty');
  // copier le texte avec le numero
  prevEmpty.innerText = tile.innerText;
  // retire le texte
  tile.innerText = "";
  // retirer la class empty de la piece 'ancienne' empty
  prevEmpty.classList.remove('empty');
}

const checkWin = () => {
  const numbers = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN";
  // console.log(tiles);
  const tileNumbers = Array.from(tiles).map((tile) => {
    return parseInt(tile.innerText, 10);
  }).join();
  return tileNumbers === numbers;
};
// selectionner les pieces (tiles)
const tiles = document.querySelectorAll('td');
// console.log(tiles);
tiles.forEach((tile) => {
  // ajouter un micro sur chaque piece, reagir au click
  tile.addEventListener('click', (event) => {
    // console.log(event);
    // tester si la piece peut bouger
    if (canMove(tile)) {
      console.log('can move');
      // bouger la piece
      move(tile);
      // verifier l'ordre des pieces on display un message qu'on a gagne.
      if (checkWin()) {
        window.alert('You win!');
      };
    }
  });
});
