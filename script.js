let squaresButton = document.querySelectorAll(".small-square");
let playAgainButton = document.querySelector(".play-again-button");
let clickSum = 0;
// Code to add event listeners to all tiles, put a X or O in a tile when clicked, and disable a tile once clicked
for(let i = 0; i < 9; i++){
    squaresButton[i].addEventListener('click', event => {
        
        if(clickSum % 2 === 0){
        squaresButton[i].innerText = "X";
      }
      else {
        squaresButton[i].innerText = "O";
      }
      squaresButton[i].disabled = true;
      clickSum ++;
      isThereAWinner();
    })
    
}
 //code to reset the round once the play again button is clicked 
playAgainButton.addEventListener("click", playAgain);
  
function playAgain (){
    for(let i = 0; i < 9; i++){
        squaresButton[i].disabled = false;
        squaresButton[i].innerText = " ";
    }
}

let ButtonArray = Array.from(squaresButton);

function isThereAWinner(){
    if(ButtonArray[0].innerText === "X" && ButtonArray[1].innerText === "X" && 
    ButtonArray[2].innerText === "X"){
        alert("We have a winner");
    }
    if(ButtonArray[0].innerText === "X" && ButtonArray[3].innerText === "X" && 
    ButtonArray[6].innerText === "X"){
        alert("We have a winner");
    }

}
//put in code to flash from a random array of text when a click has happened.
//things like "go on click me", "ooooo I wouldn't click there", etc...

