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

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    let caseInsensitiveHumanChoice = humanChoice.toLowerCase();
    let caseInsensitiveComputerChoice = computerChoice.toLowerCase();
    if ((caseInsensitiveHumanChoice === "paper" && caseInsensitiveComputerChoice === "rock") || (caseInsensitiveHumanChoice === "rock" && caseInsensitiveComputerChoice === "scissors") || (caseInsensitiveHumanChoice === "scissors" && caseInsensitiveComputerChoice === "paper")) {
        console.log(`You win! ${caseInsensitiveHumanChoice} beats ${caseInsensitiveComputerChoice}`);
        humanScore++;
    } else if ((caseInsensitiveHumanChoice === "paper" && caseInsensitiveComputerChoice === "scissors") || (caseInsensitiveHumanChoice === "rock" && caseInsensitiveComputerChoice === "paper") || (caseInsensitiveHumanChoice === "scissors" && caseInsensitiveComputerChoice === "rock")){
        console.log(`You lose! ${caseInsensitiveComputerChoice} beats ${caseInsensitiveHumanChoice}`);
        computerScore++;
    } else {
        console.log("It's a tie! Try again!");
    }
    console.log(`${humanScore}-${computerScore}`);
}