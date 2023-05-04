// const container = document.querySelector('.wrapper');
// const playFields = document.querySelectorAll(".box");
// const winner = document.createElement('div');
// winner.className = "winner";
// container.appendChild(winner);

// const userMark = "✖️"
// const computerMark = "⚫"
// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ]



// function userMove(){
//     for(let i=0; i<playFields.length; i++) {
//         playFields[i].addEventListener("click", function(){
//             this.innerText = userMark;
//             if(checkWin(userMark)){
//                 winningInfo();
                
//             }else{
//                 switchMove();
//                 computerMove();
//             }
//         });
// }};

// function computerMove(){
//     for(let i=0; i<playFields.length; i++){
//         if (playFields[i].innerText.trim() === "") {
//             playFields[i].innerText = computerMark;
//             if(checkWin(computerMark)){
//                 winningInfo();
//                 break;
//             }else{
//                 switchMove();
//                 break;
//             }
//         }
// }}
// let currentPlayer = userMark;
// function switchMove() {
//     if (currentPlayer === userMark){
//         currentPlayer = computerMark;
//     }
//     else {
//         currentPlayer = userMark;
//     }

// }

// function checkWin(mark) {
//     for (let i=0; i<winningConditions.length; i++) {
//         const condition = winningConditions[i];
//         const checkingFields = condition.map(function(fieldIndex) {
//             return playFields[fieldIndex].innerText.trim()});
//         if(checkingFields.every(function(field){
//             return field===mark})){
//             return true;
//         }
//         else if (mark === userMark && checkingFields.every(function(field){
//             return field === "✖️"
//         })){
//             return true;
//         }
//     }
//     return false;
// }
// function winningInfo(){
//     if (checkWin(userMark)){
//         winner.innerText = "Wygrałes";
//         createButton();
//         removeButton();
//     }
//     else if (checkWin(computerMark)){
//         winner.innerText = "Przegrałeś";
//         createButton();
//         removeButton();
//         return;
//     }
//     gameIsOn = false;
// }

// function createButton(){

//     const playAgainBtn = document.createElement("button");
//     playAgainBtn.innerText = "Zagraj jeszcze raz";
//     playAgainBtn.id = "playAgain";
//     container.appendChild(playAgainBtn);
// }

// function removeButton(){
//     const playAgainButton = document.getElementById("playAgain");
//     playAgainButton.addEventListener("click", function(){
//         restartGame();
//         playAgainButton.remove();
//         const winner = document.querySelector('.winner');
//         winner.remove();
//     })
// }

// function restartGame(){
//     for (let i=0; i < playFields.length; i++){
//         playFields[i].innerText = "";
//         }
// }

// let gameIsOn = true;
// userMove();
// winningInfo();












const container = document.querySelector('.wrapper');
const playFields = document.querySelectorAll(".box");
const winner = document.createElement('div');
winner.className = "winner";
container.appendChild(winner);

const userMark = "✖️"
const computerMark = "⚫"
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let gameIsOn = true;
let currentPlayer = userMark;

function userMove(){
    if (gameIsOn) {
    for(let i=0; i<playFields.length; i++) {
        playFields[i].addEventListener("click", function(){
            if (gameIsOn && this.innerText.trim() === "") {
                this.innerText = userMark;
                if(checkWin(userMark)){
                    winningInfo("Wygrałes");
                }else{
                    switchMove();
                    computerMove();
                }
            }
        });
    }}
}

function computerMove(){
    if (gameIsOn) {
        for(let i=0; i<playFields.length; i++){
            if (playFields[i].innerText.trim() === "") {
                playFields[i].innerText = computerMark;
                if(checkWin(computerMark)){
                    winningInfo("Przegrałeś");
                }else{
                    switchMove();
                }
                break;
            }
        }
    }
}

function switchMove() {
    if (currentPlayer === userMark){
        currentPlayer = computerMark;
    }
    else {
        currentPlayer = userMark;
    }
}

function checkWin(mark) {
    for (let i=0; i<winningConditions.length; i++) {
        const condition = winningConditions[i];
        const checkingFields = condition.map(function(fieldIndex) {
            return playFields[fieldIndex].innerText.trim()});
        if(checkingFields.every(function(field){
            return field===mark})){
            return true;
        }
        else if (mark === userMark && checkingFields.every(function(field){
            return field === "✖️"
        })){
            return true;
        }
    }
    return false;
}
function winningInfo(){
    if (checkWin(userMark)){
        winner.innerText = "Wygrałes";
        createButton();
        // removeButton();
    }
    else if (checkWin(computerMark)){
        winner.innerText = "Przegrałeś";
        createButton();
        // removeButton();
        return;
    }
    gameIsOn = false;
}

function createButton(){
    const playAgainBtn = document.createElement("button");
    playAgainBtn.innerText = "Zagraj jeszcze raz";
    playAgainBtn.id = "playAgain";
    container.appendChild(playAgainBtn);

    playAgainBtn.addEventListener("click", function(){
        restartGame();
        playAgainBtn.remove();
        winner.innerText = "";
        gameIsOn = true;
    });
}

function restartGame(){
    for (let i=0; i < playFields.length; i++){
        playFields[i].innerText = "";
    }
    currentPlayer = userMark;
}

userMove();

