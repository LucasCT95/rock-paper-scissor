function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
        default:
            return "This in not in the game !"
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

function playRound(playerSelection, computerSelection) {
    //ifs in notebook
    if (playerSelection == computerSelection) {
        return "Tie"
    }
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper"){
            return "You Lose! Paper beats Rock"
        }
        return "You win! Rock beats Scissor"
    }

    if (playerSelection == "Paper") {
        if (computerSelection == "Scissor"){
            return "You Lose! Scissor beats Paper"
        }
        return "You win! Paper beats Rock"
    }

    if (playerSelection == "Scissor") {
        if (computerSelection == "Rock"){
            return "You Lose! Rock beats Scissor"
        }
        return "You win! Scissor beats Paper"
    }
}
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// When getting input from user validate it (is "Rock, "Paper" or "Scissor")

//COMMIT before anything !!!
//Take a time to see git and may put all odin projects in one single folder