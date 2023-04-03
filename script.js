


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
let clickNoise = new Audio("click-button-140881.mp3");
let winNoise = new Audio("success-1-6297.mp3");
let resetNoise = new Audio("window-wipe-106600.mp3");
let quoteArray = [];
let quotes = document.querySelector(".quotes");
let drawNoise = new Audio("game-fx-9-40197.mp3");

// Code to add event listeners to all tiles, put a X or O in a tile when clicked, and disable a tile once clicked
for(let i = 0; i < 9; i++){
    squaresButton[i].addEventListener('click', event => {
        
  
    clickNoise.play(); 
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
    showQuotes();
    party.confetti(this);

    
    
    })
    
}

 //code to reset the round once the play again button is clicked 
playAgainButton.addEventListener("click", playAgain);
  
function playAgain (){
    resetNoise.play();
    for(let i = 0; i < 9; i++){
        squaresButton[i].disabled = false;
        squaresButton[i].innerText = " ";
        clickSum = 0;
        checkWinPlayerOne = 0;
        checkWinPlayerTwo = 0;
        winningMessage.innerText = " ";
        quotes.innerText = " ";

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
        drawNoise.play();
        winningMessage.innerText = "It's a Draw";

    }
    if(checkWinPlayerOne === 1){
        playerOneScore.innerHTML = playerOneWinCount;
        whoIsTheWinner();
        
        for(let i = 0; i < 9; i++){
            squaresButton[i].disabled = true;
        }
    }
    if(checkWinPlayerTwo === 1){
        playerTwoScore.innerText = playerTwoWinCount;
        whoIsTheWinner();
        
        for(let i = 0; i < 9; i++){
            squaresButton[i].disabled = true;
        }
    }
}



function whoIsTheWinner(){
    if(checkWinPlayerOne === 1){
        winningMessage.innerText = "Player One Wins";
        quotes.innerText = " ";
        winNoise.play();
    }
    else if(checkWinPlayerTwo === 1){
        winningMessage.innerText = "Player Two Wins";
        quotes.innerText = " ";
        winNoise.play();
    }
}



quoteArray = [ 
    "Ooooo, wouldn't do that if I were you!",
    "Are you sure you want to do that??",
    "Nice move",
    "That's not what I would do!",
    "Bold move!",
    "Who do you think you are?",
    "Gotcha"
    
];



function showQuotes(){
    let randomNumber = Math.floor((Math.random() * (quoteArray.length)) + 0);
    quotes.innerText = quoteArray[randomNumber];
    
}







