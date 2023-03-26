function getComputerChoice(randomNum) {
    let x;
    if (randomNum < 334) {
        x = "rock";
    } else if (randomNum < 667) {
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
const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', playFunction);

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', playFunction);

const btnScissor = document.querySelector('#scissor');
btnScissor.addEventListener('click', playFunction);

let count = 0;
let compNum = 0;
let userNum = 0;

function refreshPage() {
    window.location.reload(true);
}

function playAgain() {
    count = 0;
    compNum = 0;
    userNum = 0;
    btnRock.disabled=false;
    btnPaper.disabled=false;
    btnScissor.disabled=false;

    refreshPage();
    console.log(compNum);
    console.log(userNum);
    let res3 = document.getElementById('result');
    res3.removeChild;
}

function displayResult(str) {
    const dis = document.createElement('div');
    dis.innerText = str;
    const resultDiv = document.getElementById('result');
    resultDiv.appendChild(dis);
}

function announceWinner(compNum, userNum) {
    if (compNum == 5) {
        displayResult('Computer wins this round');
    }
    if (userNum == 5) {
        displayResult('Human wins this round');
    }
}

function countFunction(y) {
    if (y == "comp wins") {
        compNum++;
    } else if (y == 'u wins') {
        userNum++;
    }
    if (compNum == 5 || userNum == 5) {
        announceWinner(compNum, userNum);
        btnRock.disabled=true;
        btnPaper.disabled=true;
        btnScissor.disabled=true;



        const playAgainBtn = document.createElement('button');
        playAgainBtn.innerText = "Play Again";
        playAgainBtn.addEventListener('click', playAgain);
        const result2 = document.getElementById('result');
        result2.appendChild(playAgainBtn);
    }
}


function playFunction(e) {

    const userSelection = e.target.id;
    const randomNum = Math.floor(Math.random() * 1000);
    const compChoice = getComputerChoice(randomNum);

    const y = gameResult(userSelection, compChoice);

    displayResult(y);

    if (y !== "draw") {
        countFunction(y);
    }
    
    console.log(userSelection);
    console.log(compChoice);
    console.log(y);
}
