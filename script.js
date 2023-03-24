let randomNum = Math.floor(Math.random() * 1000);
let userSelection = prompt("Enter Your choice");
let compChoice = getComputerChoice(randomNum);

function getComputerChoice(randomNum) {
    let x;
    if (randomNum < 334) {
        x = "rock";
    } else if (randomNum < 666) {
        x = "paper"
    } else {
        x = "scissor";
    }
    return x;
}

function gameResult(userSelection, compChoice) {
    if (userSelection === "rock" && compChoice === "rock" || userSelection === "paper" && compChoice === "paper" || userSelection === "scissor" && compChoice === "scissor") {
        return "draw";
    } else if (userSelection === "rock" && compChoice === "paper" || userSelection === "paper" && compChoice === "scissor" || userSelection === "scissor" && compChoice === "rock") {
        return "comp wins";
    } else if (userSelection === "paper" && compChoice === "rock" || userSelection === "scissor" && compChoice === "paper" || userSelection === "rock" && compChoice === "scissor") {
        return "u wins";
    }
}
console.log(userSelection);
console.log(getComputerChoice(randomNum));
console.log(gameResult(userSelection, compChoice));