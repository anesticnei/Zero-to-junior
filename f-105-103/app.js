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

btn1.addEventListener("click", () =>{
  NUMBER_OF_MINES = 5;
  mineText.textContent = NUMBER_OF_MINES;
  btnWrapper.style.display = "none";
  boardElement.style.display = "inline-grid";
  
  startGame();
})
btn2.addEventListener("click", () =>{
  NUMBER_OF_MINES = 10;
  mineText.textContent = NUMBER_OF_MINES;
  btnWrapper.style.display = "none";
  boardElement.style.display = "inline-grid";
  startGame();
})
btn3.addEventListener("click", () =>{
  NUMBER_OF_MINES = 20;
  mineText.textContent = NUMBER_OF_MINES;
  btnWrapper.style.display = "none";
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
    mineText.textContent = NUMBER_OF_MINES - markedTilesCound
  }
   
   function checkGameEnd(){
    const win = checkWin(board)
    const lose = checkLose(board)
  
    if(win || lose){
      boardElement.addEventListener("click", stopProp, { capture: true})
      boardElement.addEventListener("contextmenu", stopProp, { capture: true})
    }
    if(win){
      messageText.textContent = "You Win"
      
    }
    if (lose){
      messageText.textContent = "You Lose"
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







// let NUMBER_OF_MINES = value();

  // let NUMBER_OF_MINES = numberOfMines();



// console.log(NUMBER_OF_MINES)



// let NUMBER_OF_MINES = checkMe()




// function checkMe() {
//   btn1.addEventListener("click",()=> {
//     return 1});
// }

// function checkMe(value) {
//   btn1.addEventListener("click",()=> {
//     value = 1
//   return value  
//   });
// }

// function checkMe() {
//   btn1.addEventListener("click",(value)=> {
//     value = 1
//   return value  
//   });
// }


// function checkMe() {

//   let mines = 0;

//   const btn1 = document.getElementById('button1');
//   btn1.addEventListener("click", () =>{
//     mines = 1
//   })
//   return mines

// }






// function checkMe() {
//   const btn1 = document.getElementById('button1');
//   const btn2 = document.getElementById('button2');
//   const btn3 = document.getElementById('button3');
//   const btnWrapper = document.querySelector('.buttons-wrapper');
 
//   btn1.addEventListener("click",()=> {
//     btnWrapper.style.display = "none"
//     return 1});
// }





// btn1.addEventListener("click",()=> {
//   btnWrapper.style.display = "none"
//   return 1});
// btn2.addEventListener("click", function() {
//   btnWrapper.style.display = "none"
//   return 1});
// btn3.addEventListener("click", function() {
//   btnWrapper.style.display = "none"
//   return 1});



// const NUMBER_OF_MINES = checkMe();

// console.log(NUMBER_OF_MINES); // For testing purposes only

  





// function getNumber(buttonValue) {
//   if (buttonValue === 1) {
//     return 1;
//   } else if (buttonValue === 10) {
//     return 10;
//   } else if (buttonValue === 20) {
//     return 20;
//   } else {
//     return 0;
//   }
// }
// let NUMBER_OF_MINES = "";

// function chooseMinesNumber() {
//   const btn1 = document.getElementById('button1');
//   const btn2 = document.getElementById('button2');
//   const btn3 = document.getElementById('button3');
//   const btnWrapper = document.querySelector('.buttons-wrapper')
//   let NUMBER_OF_MINES = "";
//   btn1.addEventListener("click", function() {

//     let NUMBER_OF_MINES = 1;
//     btnWrapper.style.display = 'none';
//     return NUMBER_OF_MINES
//   });
//   btn2.addEventListener("click", function() {
//     NUMBER_OF_MINES = 10;
//     btnWrapper.style.display = 'none';
//   });
//   btn3.addEventListener("click", function() {
//     NUMBER_OF_MINES = 20;
//     btnWrapper.style.display = 'none';
//   });
// }

// // chooseMinesNumber()
// NUMBER_OF_MINES = chooseMinesNumber();
// const NUMBER_OF_MINES = chooseMinesNumber();
// console.log(NUMBER_OF_MINES); // For testing purposes only











// const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
// const boardElement = document.querySelector('.board');
// const mineText = document.querySelector('[data-mine-count]')
// const messageText = document.querySelector('.subtext')

// creating 3 buttons with number of mines
//after selecting number of mines aply them to numer_of_mines
// Mines Left = change to buttons first, after selecting numbers will change to Mines Left: x



// console.log(board)

// board.forEach(row =>{
//   row.forEach(tile =>{
//     boardElement.append(tile.element)
//     tile.element.addEventListener("click",() =>{
//       revealTile(board ,tile)
//       checkGameEnd()

//     })
//     tile.element.addEventListener('contextmenu', e =>{
//       e.preventDefault();
//       markTile(tile);
//       listMinesLeft();
//     })
//   })
// })


// boardElement.style.setProperty("--size", BOARD_SIZE);
// mineText.textContent = NUMBER_OF_MINES;

// function listMinesLeft() {
//   const markedTilesCound = board.reduce((count, row) =>{
//     return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
//   }, 0)
//   mineText.textContent = NUMBER_OF_MINES - markedTilesCound
// }
 
//  function checkGameEnd(){
//   const win = checkWin(board)
//   const lose = checkLose(board)

//   if(win || lose){
//     boardElement.addEventListener("click", stopProp, { capture: true})
//     boardElement.addEventListener("contextmenu", stopProp, { capture: true})
//   }
//   if(win){
//     messageText.textContent = "You Win"
//   }
//   if (lose){
//     messageText.textContent = "You Lose"
//     board.forEach(row =>{
//       row.forEach(tile =>{
//         if(tile.status === TILE_STATUSES.MARKED) markTile(tile)
//         if(tile.mine) revealTile(board,tile)
//       })
    
//   })
// }
// }



// function stopProp(e) {
//   e.stopImmediatePropagation()
// }