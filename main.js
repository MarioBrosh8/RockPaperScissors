const buttons = document.querySelectorAll('button');
const matchResult = document.getElementById('result');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score')

let computerWins = 0;
let userWins = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playround(button.id, computerPlay());
        matchResult.innerHTML = result;
        if(result === "Computer wins!"){
            computerWins++
            computerScore.innerHTML = computerWins;
        }else if(result === "You win!"){
            userWins++
            userScore.innerHTML = userWins;
        }
        console.log(result);
    })
})

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playround(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        return "It is a draw!"
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") 
    ){
        return "You win!"
    } else {
        return "Computer wins!"
    }
    
}