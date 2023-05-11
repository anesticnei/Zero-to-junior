// const board = document.querySelector('.board');
// const restartButton = document.querySelector('.restart');

// const ROWS = 10;
// const COLS = 10;
// const MINES = 10;

// let cells = [];

// function initialize() {
//   // Create empty board
//   for (let i = 0; i < ROWS; i++) {
//     let row = [];
//     for (let j = 0; j < COLS; j++) {
//       row.push({
//         mine: false,
//         revealed: false,
//         flagged: false,
//         neighbors: 0
//       });
//     }
//     cells.push(row);
//   }
  
//   // Add mines
//   let remainingMines = MINES;
//   while (remainingMines > 0) {
//     let row = Math.floor(Math.random() * ROWS);
//     let col = Math.floor(Math.random() * COLS);
//     if (!cells[row][col].mine) {
//       cells[row][col].mine = true;
//       remainingMines--;
//     }
//   }
  
//   // Calculate neighbor counts
//   for (let i = 0; i < ROWS; i++) {
//     for (let j = 0; j < COLS; j++) {
//       if (cells[i][j].mine) {
//         incrementNeighbors(i - 1, j - 1);
//         incrementNeighbors(i - 1, j);
//         incrementNeighbors(i - 1, j + 1);
//         incrementNeighbors(i, j - 1);
//         incrementNeighbors(i, j + 1);
//         incrementNeighbors(i + 1, j - 1);
//         incrementNeighbors(i + 1, j);
//         incrementNeighbors(i + 1, j + 1);
//       }
//     }
//   }
  
//   // Render board
//   board.innerHTML = '';
//   for (let i = 0; i < ROWS; i++) {
//     for (let j = 0; j < COLS; j++) {
//       let cell = document.createElement('div');
//       cell.classList.add('cell');
//       cell.setAttribute('data-row', i);
//       cell.setAttribute('data-col', j);
//       cell.addEventListener('click', handleCellClick);
//       cell.addEventListener('contextmenu', handleCellContextMenu);
//       board.appendChild(cell);
//     }
//   }
// }

// function incrementNeighbors(row, col) {
//   if (row >= 0 && row < ROWS && col >= 0 && col < COLS) {
//     cells[row][col].neighbors++;
//   }
// }
// function reveal(row, col) {
//     let cell = cells[row][col];
//     if (!cell.revealed) {
//       cell.revealed = true;
//       let cellElement = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
//       cellElement.classList.add('revealed');
//       if (cell.mine) {
//         cellElement.classList.add('mine');
//         gameOver();
//         return; // stop the function execution
//       } else if (cell.neighbors === 0) {
//         reveal(row - 1, col - 1);
//         reveal(row - 1, col);
//         reveal(row - 1, col + 1);
//         reveal(row, col - 1);
//         reveal(row, col + 1);
//         reveal(row + 1, col - 1);
//         reveal(row + 1, col);
//         reveal(row + 1, col + 1);
//       } else {
//         cellElement.textContent = cell.neighbors;
//       }
//     }
//   }
  
  
// function flag(row, col) {
//     let cell = cells[row][col];
//     if (!cell.revealed) {
//       cell.flagged = !cell.flagged;
//       let cellElement = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
//       cellElement.classList.toggle('flagged', cell.flagged);
//     }
//   }

//   function checkForWin() {
//     let win = true;
//     cells.forEach((row) => {
//       row.forEach((cell) => {
//         if (!cell.mine && !cell.revealed) {
//           win = false;
//         }
//       });
//     });
  
//     if (win) {
//       // Disable clicking on cells
//       let cells = document.querySelectorAll('.cell');
//       cells.forEach((cell) => {
//         cell.removeEventListener('click', handleCellClick);
//         cell.removeEventListener('contextmenu', handleCellContextMenu);
//       });
  
//       // Show win message
//       alert('You win!');
//     }
//   }
  
//   function updateRemainingMines() {
//     let remainingMines = MINES;
//     cells.forEach((row) => {
//       row.forEach((cell) => {
//         if (cell.flagged) {
//           remainingMines--;
//         }
//       });
//     });
//     let remainingMinesElement = document.querySelector('.remaining-mines');
//     remainingMinesElement.textContent = remainingMines;
//   }
  
//   function resetGame() {
//     // Reset cells
//     cells = [];
//     initialize();
  
//     // Reset remaining mines display
//     let remainingMinesElement = document.querySelector('.remaining-mines');
//     remainingMinesElement.textContent = MINES;
//   }
  
//   function handleCellClick(event) {
//     let row = parseInt(event.target.getAttribute('data-row'));
//     let col = parseInt(event.target.getAttribute('data-col'));
//     reveal(row, col);
//   }
  
//   function handleCellContextMenu(event) {
//     event.preventDefault();
//     let row = parseInt(event.target.getAttribute('data-row'));
//     let col = parseInt(event.target.getAttribute('data-col'));
//     flag(row, col);
//   }
  
//   function gameOver() {
//     // Reveal all cells
//     cells.forEach((row, rowIndex) => {
//       row.forEach((cell, colIndex) => {
//         let cellElement = document.querySelector(`.cell[data-row="${rowIndex}"][data-col="${colIndex}"]`);
//         if (!cell.revealed) {
//           cellElement.classList.add('revealed');
//           if (cell.mine) {
//             cellElement.classList.add('mine');
//           } else {
//             cellElement.textContent = cell.neighbors;
//           }
//         }
//       });
//     });
    
//     // Disable clicking on cells
//     let cells = document.querySelectorAll('.cell');
//     cells.forEach((cell) => {
//       cell.removeEventListener('click', handleCellClick);
//       cell.removeEventListener('contextmenu', handleCellContextMenu);
//     });
//   }
  
//   initialize();
//   restartButton.addEventListener('click', initialize);
  

//Display UI

import {  TILE_STATUSES ,createBoard, markTile, revealTile } from "./minesweeper.js";

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 5

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector('.board');
const mineText = document.querySelector('[data-mine-count]')


console.log(board)

board.forEach(row =>{
  row.forEach(tile =>{
    boardElement.append(tile.element)
    tile.element.addEventListener("click",() =>{
      revealTile(board ,tile)


    })
    tile.element.addEventListener('contextmenu', e =>{
      e.preventDefault();
      markTile(tile);
      listMinesLeft();
    })
  })
})


boardElement.style.setProperty("--size", BOARD_SIZE);
mineText.textContent = NUMBER_OF_MINES;

function listMinesLeft() {
  const markedTilesCound = board.reduce((count, row) =>{
    return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
  }, 0)
  mineText.textContent = NUMBER_OF_MINES - markedTilesCound
}
 
 //1. populate a board with tiles/mines
 //2. Left click on tiles
 //   a.Reveal Tiles
 //3. Right click on tiles
 //   a.Mark Tiles
 //4. Check for win/lose.
 
