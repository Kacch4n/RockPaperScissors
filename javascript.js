function getComputerChoice () {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "paper";
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        return "rock";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    let humanChoice = prompt();
    return humanChoice;
}

function playGame () {

let humanScore = 0;
let computerScore = 0;

    function playRound () {
    let humanSelection = getComputerChoice();
    let computerSelection = getHumanChoice();
    if ((humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "paper")) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        humanScore++;
    } else if ((humanSelection === "paper" && computerSelection === "scissors") || (humanSelection === "rock" && computerSelection === "paper") || (humanSelection === "scissors" && computerSelection === "rock")){
        console.log(`You lose! ${humanSelection} beats ${computerSelection}`);
        computerScore++;
    } else {
        console.log("It's a tie! Try again!");
    }
    console.log(`${humanScore}-${computerScore}`);
}

for (;(computerScore < 5) && (humanScore < 5);) {
    playRound();
}

}

