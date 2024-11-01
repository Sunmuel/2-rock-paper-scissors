let rock = document.getElementById("rock-button");
let paper = document.getElementById("paper-button");
let scissors = document.getElementById("scissors-button");
let result = document.getElementById("text-result");
let player = document.getElementById("player-choice-div");
let computer = document.getElementById("computer-choice-div");
let profilePicture = document.getElementById("profile-picture-picker");
let returnButton = document.getElementById("return-page");
returnButton.addEventListener("click", () => {
    window.location.href = "../../home/index.html";
})
let request;

rock.addEventListener("click", () => {
    optionOnClick("rock", "rock")
})

paper.addEventListener("click", () => {
    optionOnClick("paper", "paper")
})

scissors.addEventListener("click", () => {
    optionOnClick("scissors", "scissors")
})

profilePicture.addEventListener("click", () => {
    let computerChoice = computerMove();

    if (request === "rock") {
        startOnClick("That is a tie!", "That is a lose!", "That is a victory!", "Rock ties with Rock", "Paper covers Rock", "Rock crashes Scissors")
    } else if (request === "paper") {
        startOnClick("That is a victory!", "That is a tie!", "That is a lose", "Paper covers Rock", "Paper ties with Paper", "Scissors cut Paper")
    } else if (request === "scissors") {
        startOnClick("That is a lose!", "That is a victory!", "That is a tie!", "Rock crashes Scissors", "Scissors cut Paper", "Scissors ties with Scissors")
    } else {
        alert("You should click an option before getting started!")
    }
    request = "zero"; 
})

// --------------------------------------------------------------------------------------

function computerMove() {
    const random = Math.random();
    let computerMove;
    if (random <= 1/3) {
        computerMove = "rock";
    } else if (random > 1/3 && random <= 2/3) {
        computerMove = "paper";
    } else if (random > 2/3 && random <= 1) {
        computerMove = "scissors";
    }

    return computerMove;
}

function optionOnClick(requestOption, imageOption) {
    let computerChoice = computerMove();
    result.innerHTML = ``;
    player.innerHTML = ``;
    computer.innerHTML = ``;
    request = "zero";
    request = requestOption;
    player.innerHTML = `
        <img id="player-choice" src="images/${imageOption}.png" alt="">
    `;
}

function startOnClick(rock, paper, scissors, exp1, exp2, exp3) {
    let computerChoice = computerMove(); 
    if (computerChoice === "rock") {
        result.innerHTML = `
        <h1 id="result">${rock}</h1>
        <p id="result-explanation">${exp1}</p>
        <p>
        `
    } else if (computerChoice === "paper") {
        result.innerHTML = `
        <h1 id="result">${paper}</h1>
        <p id="result-explanation">${exp2}</p>
        `
    } else if (computerChoice === "scissors") {
        result.innerHTML = `
        <h1 id="result">${scissors}</h1>
        <p id="result-explanation">${exp3}</p>
        `
    }

    if (computerChoice === "rock") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/rock.png" alt="">
        `
    } else if (computerChoice === "paper") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/paper.png" alt="">
        `
    } else if (computerChoice === "scissors") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/scissors.png" alt="">
        `
    }
}