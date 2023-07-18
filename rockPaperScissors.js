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
    if(string==null){
        throw "You must choose rock, paper or scissor"
    }
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"
    }
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper"){
            return "You lose! Paper beats Rock"
        }
        return "You win! Rock beats Scissor"
    }

    if (playerSelection == "Paper") {
        if (computerSelection == "Scissor"){
            return "You lose! Scissor beats Paper"
        }
        return "You win! Paper beats Rock"
    }

    if (playerSelection == "Scissor") {
        if (computerSelection == "Rock"){
            return "You lose! Rock beats Scissor"
        }
        return "You win! Scissor beats Paper"
    }
}

function game(){
    let resultMessageList= [];

    for (let index = 0; index <= 4; index++) {
        const playerSelection = capitalizeFirstLetter(prompt("Rock, paper or scissor?"));
        validateInput(playerSelection)
        const computerSelection = getComputerChoice();
        const resultMessage = playRound(playerSelection, computerSelection)
        console.log(resultMessage);
        resultMessageList.push(resultMessage)
    }

    console.log(getWinner(resultMessageList));
}

function validateInput(string){
    if(string !='Rock' && string !='Paper' && string !='Scissor'){
        throw "Invalid Input !"
    }
}

function getWinner(resultMessageList){
    let youWin = 0;
    let pcWin = 0;
    resultMessageList.forEach(msg => {
        if (msg.includes("win")){
            youWin++
        } else if (msg.includes("lose")){
            pcWin++
        }
    });

    if (youWin>pcWin){
       return "You win!"
    } else if(youWin<pcWin){
        return "Pc win!"
    } else {
        return "Game ended in a Tie"
    }

}
game();
// When getting input from user validate it (is "Rock, "Paper" or "Scissor")

//COMMIT before anything !!!
//Take a time to see git and may put all odin projects in one single folder