function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);

}

function playRound(playerSelection, computerSelection){
    
}


function game()
{
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)

}


const rockButton = document.getElementById("rockButton").addEventListener("click", () => playRound("Rock"));
const paperButton = document.getElementById("paperButton").addEventListener("click", () => playRound("Paper"));
const scissorskButton = document.getElementById("scissorsButton").addEventListener("click", () => playRound("Scissors"));