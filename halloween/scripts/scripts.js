let zombie = document.getElementById("zombie-button");
let ghost = document.getElementById("ghost-button");
let witch = document.getElementById("witch-button");
let result = document.getElementById("text-result");
let player = document.getElementById("player-choice-div");
let computer = document.getElementById("computer-choice-div");
let profilePicture = document.getElementById("profile-picture-picker");
let returnButton = document.getElementById("return-page");
returnButton.addEventListener("click", () => {
    window.location.href = "../../home/index.html";
})
let request;

zombie.addEventListener("click", () => {
    optionOnClick("zombie", "zombie")
})

ghost.addEventListener("click", () => {
    optionOnClick("ghost", "ghost")
})

witch.addEventListener("click", () => {
    optionOnClick("witch", "witch")
})

profilePicture.addEventListener("click", () => {
    let computerChoice = computerMove();

    if (request === "zombie") {
        startOnClick("That is a tie!", "That is a lose!", "That is a victory!", "Zombie devours Zombie", "Ghost scares Zombie", "Zombie devours Witch")
    } else if (request === "ghost") {
        startOnClick("That is a victory!", "That is a tie!", "That is a lose", "Ghost scares Zombie", "Ghost scares Ghost", "Witch poisons Ghost")
    } else if (request === "witch") {
        startOnClick("That is a lose!", "That is a victory!", "That is a tie!", "Zombie devours Witch", "Witch poisons Ghost", "Witch poisons Witch")
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
        computerMove = "zombie";
    } else if (random > 1/3 && random <= 2/3) {
        computerMove = "ghost";
    } else if (random > 2/3 && random <= 1) {
        computerMove = "witch";
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

function startOnClick(zombie, ghost, witch, exp1, exp2, exp3) {
    let computerChoice = computerMove(); 
    if (computerChoice === "zombie") {
        result.innerHTML = `
        <h1 id="result">${zombie}</h1>
        <p id="result-explanation">${exp1}</p>
        <p>
        `
    } else if (computerChoice === "ghost") {
        result.innerHTML = `
        <h1 id="result">${ghost}</h1>
        <p id="result-explanation">${exp2}</p>
        `
    } else if (computerChoice === "witch") {
        result.innerHTML = `
        <h1 id="result">${witch}</h1>
        <p id="result-explanation">${exp3}</p>
        `
    }

    if (computerChoice === "zombie") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/zombie.png" alt="">
        `
    } else if (computerChoice === "ghost") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/ghost.png" alt="">
        `
    } else if (computerChoice === "witch") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/witch.png" alt="">
        `
    }
}