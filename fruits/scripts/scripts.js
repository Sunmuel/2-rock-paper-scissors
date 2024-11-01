let banana = document.getElementById("banana-button");
let apple = document.getElementById("apple-button");
let papaya = document.getElementById("papaya-button");
let result = document.getElementById("text-result");
let player = document.getElementById("player-choice-div");
let computer = document.getElementById("computer-choice-div");
let profilePicture = document.getElementById("profile-picture-picker");
let returnButton = document.getElementById("return-page");
returnButton.addEventListener("click", () => {
    window.location.href = "../../home/index.html";
})
let request;

banana.addEventListener("click", () => {
    fruitOnClick("banana", "banana")
})

apple.addEventListener("click", () => {
    fruitOnClick("apple", "apple")
})

papaya.addEventListener("click", () => {
    fruitOnClick("papaya", "papaya")
})

profilePicture.addEventListener("click", () => {
    let computerChoice = computerMove();

    if (request === "banana") {
        startOnClick("That is a tie!", "That is a victory!", "That is a lose!", "Bananas don't eat each other", "That apple fell in love by you", "You got 1000 holes on your chest and died")
    } else if (request === "apple") {
        startOnClick("That is a lose!", "That is a tie!", "That is a victory", "You fell in love by that banana", "Apples don't do that thing with another apples", "You kissed that Papaya so many times that he died")
    } else if (request === "papaya") {
        startOnClick("That is a victory!", "That is a lose!", "That is a tie!", "You shooted all you seed shots and the Banana died", "After 1000 apple's kisses you died", "Both Papayas missed every seed shoot and died")
    } else {
        alert("You should click a fruit before getting started!")
    }
    request = "zero"; 
})

// --------------------------------------------------------------------------------------

function computerMove() {
    const random = Math.random();
    let computerMove;
    if (random <= 1/3) {
        computerMove = "Banana";
    } else if (random > 1/3 && random <= 2/3) {
        computerMove = "Apple";
    } else if (random > 2/3 && random <= 1) {
        computerMove = "Papaya";
    }

    return computerMove;
}

function fruitOnClick(requestFruit, imageFruit) {
    let computerChoice = computerMove();
    result.innerHTML = ``;
    player.innerHTML = ``;
    computer.innerHTML = ``;
    request = "zero";
    request = requestFruit;
    player.innerHTML = `
        <img id="player-choice" src="images/${imageFruit}.png" alt="">
    `;
}

function startOnClick(banana, apple, papaya, exp1, exp2, exp3) {
    let computerChoice = computerMove(); 
    if (computerChoice === "Banana") {
        result.innerHTML = `
        <h1 id="result">${banana}</h1>
        <p id="result-explanation">${exp1}</p>
        <p>
        `
    } else if (computerChoice === "Apple") {
        result.innerHTML = `
        <h1 id="result">${apple}</h1>
        <p id="result-explanation">${exp2}</p>
        `
    } else if (computerChoice === "Papaya") {
        result.innerHTML = `
        <h1 id="result">${papaya}</h1>
        <p id="result-explanation">${exp3}</p>
        `
    }

    if (computerChoice === "Banana") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/banana.png" alt="">
        `
    } else if (computerChoice === "Apple") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/apple.png" alt="">
        `
    } else if (computerChoice === "Papaya") {
        computer.innerHTML = `
            <img id="computer-choice" src="images/papaya.png" alt="">
        `
    }
}