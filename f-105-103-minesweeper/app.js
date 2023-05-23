import { createBoard, TILE_STATUSES, revealTile, nearByTiles, markTile } from "./minesweeper.js"

const BOARD_SIZE = 10
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btnWrapper = document.querySelector('.buttons-wrapper');

let NUMBER_OF_MINES = 0;
const boardElement = document.querySelector('.board');
const mineText = document.querySelector('[data-mine-count]')
const messageText = document.querySelector('.subtext')
const text = document.querySelector('.text');

btn1.addEventListener("click", () =>{
  text.style.display = "none";
  btnWrapper.style.display = "none";
  NUMBER_OF_MINES = 5;
  mineText.textContent = "Numbers of mines left: " + NUMBER_OF_MINES;
  boardElement.style.display = "inline-grid";
  
  startGame();
})
btn2.addEventListener("click", () =>{
  text.style.display = "none";
  btnWrapper.style.display = "none";
  NUMBER_OF_MINES = 10;
  mineText.textContent = "Numbers of mines left: " + NUMBER_OF_MINES;
  boardElement.style.display = "inline-grid";
  startGame();
})
btn3.addEventListener("click", () =>{
  text.style.display = "none";
  btnWrapper.style.display = "none";
  NUMBER_OF_MINES = 20;
  mineText.textContent = "Numbers of mines left: " + NUMBER_OF_MINES;
  boardElement.style.display = "inline-grid";
  startGame();
})

function startGame() {
  
    const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
    boardElement.style.setProperty("--size", BOARD_SIZE);  
    board.forEach(row =>{
      row.forEach(tile =>{
        boardElement.append(tile.element)
        tile.element.addEventListener("click",() =>{
          revealTile(board ,tile)
        //   checkGameEnd()
  
        })
        tile.element.addEventListener('contextmenu', e =>{
          e.preventDefault();
          markTile(tile);
          listMinesLeft();
        })
      })
    })}
