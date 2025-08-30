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

let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#lastSelection");
const score = document.querySelector("#currentScore");

function playGame (humanSelection) {

    function playRound () {
    let computerSelection = getComputerChoice ();
    
    if (computerScore === 5) {
        const announcingLine = document.createElement("div");
        const announcement = document.createTextNode("Computer won last round!!");
        announcingLine.appendChild(announcement);
        document.body.insertBefore(announcingLine, score);
        announcingLine.setAttribute("id","announcingLine");
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore === 5) {
        const announcingLine = document.createElement("div");
        const announcement = document.createTextNode("You won last round!!");
        announcingLine.appendChild(announcement);
        document.body.insertBefore(announcingLine, score);
        announcingLine.setAttribute("id","announcingLine"); 
        humanScore = 0;
        computerScore = 0;
    } else if ((humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "paper")) {
        container.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
        humanScore++;
        score.textContent = `${humanScore}-${computerScore}`;
        let announcingLineHuman = document.querySelector("#announcingLine");
        announcingLineHuman.remove();
    } else if ((humanSelection === "paper" && computerSelection === "scissors") || (humanSelection === "rock" && computerSelection === "paper") || (humanSelection === "scissors" && computerSelection === "rock")){
        container.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
        computerScore++;
        score.textContent = `${humanScore}-${computerScore}`;
        let announcingLineComputer = document.querySelector("#announcingLine");
        announcingLineComputer.remove();
    } else if (humanSelection === computerSelection) {
        container.textContent = `It's a tie! ${computerSelection} against ${humanSelection}. Try again!`;
        score.textContent = `${humanScore}-${computerScore}`;
    }
    
}

playRound();

}

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    playGame(button.id);
});
});
