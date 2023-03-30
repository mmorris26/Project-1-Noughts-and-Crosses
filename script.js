let squaresButton = document.querySelectorAll(".small-square");
let playAgainButton = document.querySelector(".play-again-button");
let clickSum = 0;
let ButtonArray = Array.from(squaresButton);
let ButtonGridArray = [[], [], []];
let checkWinPlayerOne = 0;
let checkWinPlayerTwo = 0;
let playerOneScore = document.querySelector("h2");
let playerTwoScore = document.querySelector("#player-2 h2");
let playerOneWinCount = 0;
let playerTwoWinCount = 0;
let winningMessage = document.querySelector("header");
// Code to add event listeners to all tiles, put a X or O in a tile when clicked, and disable a tile once clicked
for(let i = 0; i < 9; i++){
    squaresButton[i].addEventListener('click', event => {
    squaresButton[i].innerText = "";    
        if(clickSum % 2 === 0){
        squaresButton[i].innerText = "X";
      }
      else {
        squaresButton[i].innerText = "O";
      }
      squaresButton[i].disabled = true;
      clickSum ++;
    isThereAWinner();
    whatIsTheOutcome();
    
    })
    
}

 //code to reset the round once the play again button is clicked 
playAgainButton.addEventListener("click", playAgain);
  
function playAgain (){
    for(let i = 0; i < 9; i++){
        squaresButton[i].disabled = false;
        squaresButton[i].innerText = " ";
        clickSum = 0;
        checkWinPlayerOne = 0;
        checkWinPlayerTwo = 0;
        winningMessage.innerText = " ";
    }
}

ButtonGridArray [0][0] = ButtonArray [0];
ButtonGridArray [0][1] = ButtonArray [1];
ButtonGridArray [0][2] = ButtonArray [2];
ButtonGridArray [1][0] = ButtonArray [3];
ButtonGridArray [1][1] = ButtonArray [4];
ButtonGridArray [1][2] = ButtonArray [5];
ButtonGridArray [2][0] = ButtonArray [6];
ButtonGridArray [2][1] = ButtonArray [7];
ButtonGridArray [2][2] = ButtonArray [8];

function isThereAWinner(){
    //check rows
    for (let i = 0; i < 3; i++){
        if (ButtonGridArray[i][0].innerText === "X" && ButtonGridArray[i][1].innerText === "X" 
        && ButtonGridArray[i][2].innerText === "X"){
            checkWinPlayerOne = 1;
            playerOneWinCount ++;
        }
        else if (ButtonGridArray[i][0].innerText === "O" && ButtonGridArray[i][1].innerText === "O" 
        && ButtonGridArray[i][2].innerText === "O"){
            checkWinPlayerTwo = 1;
            playerTwoWinCount ++;
        }
          
    }
    //check columns
    for (let x = 0; x < 3; x++){
        if(ButtonGridArray[0][x].innerText === "X" && ButtonGridArray[1][x].innerText === "X" 
        && ButtonGridArray[2][x].innerText === "X") {
            checkWinPlayerOne = 1;
            playerOneWinCount ++;
        }
        else if(ButtonGridArray[0][x].innerText === "O" &&  ButtonGridArray[1][x].innerText === "O" 
        && ButtonGridArray[2][x].innerText === "O"){
            checkWinPlayerTwo = 1;
            playerTwoWinCount ++;
        }
    }
    //check diagonals
    if(ButtonGridArray[0][0].innerText === "X" && ButtonGridArray[1][1].innerText === "X" 
        && ButtonGridArray[2][2].innerText === "X"){
            checkWinPlayerOne = 1;
            playerOneWinCount ++;
        }
    if (ButtonGridArray[0][0].innerText === "O" && ButtonGridArray[1][1].innerText === "O" 
    && ButtonGridArray[2][2].innerText === "O"){
            checkWinPlayerTwo = 1;
            playerTwoWinCount ++;
    }
    
    if(ButtonGridArray[0][2].innerText === "X" && ButtonGridArray[1][1].innerText === "X" 
        && ButtonGridArray[2][0].innerText === "X"){
            checkWinPlayerOne = 1;
            playerOneWinCount++;
        }
    if (ButtonGridArray[0][2].innerText === "O" && ButtonGridArray[1][1].innerText === "O" && 
    ButtonGridArray[2][0].innerText === "O"){
            checkWinPlayerTwo = 1;
            playerTwoWinCount++;
    }
    
    
}

function whatIsTheOutcome(){
    if((checkWinPlayerOne === 0 || checkWinPlayerTwo === 0) && clickSum === 9){
        alert("it's a draw");
        
    }
    if(checkWinPlayerOne === 1){
        playerOneScore.innerHTML = playerOneWinCount;
        whoIsTheWinner()
        for(let i = 0; i < 9; i++){
            squaresButton[i].disabled = true;
        }
    }
    if(checkWinPlayerTwo === 1){
        playerTwoScore.innerText = playerTwoWinCount;
        whoIsTheWinner()
        for(let i = 0; i < 9; i++){
            squaresButton[i].disabled = true;
        }
    }
}

function whoIsTheWinner(){
    if(checkWinPlayerOne === 1){
        winningMessage.innerText = "Player One Wins";
    }
    else if(checkWinPlayerTwo === 1){
        winningMessage.innerText = "Player Two Wins";
    }
}



//put in code to flash from a random array of text when a click has happened.
//things like "go on click me", "ooooo I wouldn't click there", etc...

//put in sounds effects when users click a button

