//Display UI

import {  
  TILE_STATUSES ,
  createBoard, 
  markTile, 
  revealTile,
  checkWin,
  checkLose,
} from "./minesweeper.js";

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
        checkGameEnd()

      })
      tile.element.addEventListener('contextmenu', e =>{
        e.preventDefault();
        markTile(tile);
        listMinesLeft();
      })
    })
  })

// const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)


  function listMinesLeft() {
    const markedTilesCound = board.reduce((count, row) =>{
      return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
    }, 0)
    mineText.textContent = "Numbers of mines left: " + (NUMBER_OF_MINES - markedTilesCound)
  }
   
   function checkGameEnd(){
    const win = checkWin(board)
    const lose = checkLose(board)
  
    if(win || lose){
      boardElement.addEventListener("click", stopProp, { capture: true})
      boardElement.addEventListener("contextmenu", stopProp, { capture: true})
    }

    // const resetBtn = document.createElement("button")
    // resetBtn.className = "reset-btn";
    // resetBtn.innerHTML = "RESET THE GAME";
    // messageText.appendChild(resetBtn)
    
    function resetReload(){
      const resetBtn = document.createElement("button")
      resetBtn.className = "reset-btn";
      resetBtn.innerHTML = "RESET THE GAME";
      messageText.appendChild(resetBtn)
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", () =>{
        window.location.reload()})
    }

    if(win){
      messageText.textContent = "You Win";
      resetReload()      
    }
    if (lose){
      messageText.textContent = "You Lose"
      resetReload()
      board.forEach(row =>{
        row.forEach(tile =>{
          if(tile.status === TILE_STATUSES.MARKED) markTile(tile)
          if(tile.mine) revealTile(board,tile)
        })
      
    })
  }
  }
  
  
  
  function stopProp(e) {
    e.stopImmediatePropagation()
  }
}