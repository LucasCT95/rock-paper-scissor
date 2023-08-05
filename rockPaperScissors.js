// GAME FUNCTION

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

// DOM MANIPULATION
function updateScore(msg){
    if (msg.includes("win")){
        youWin++
    } else if (msg.includes("lose")){
        pcWin++
    }
    playerScore.textContent = "You win: "+ youWin.toString() +" times"
    pcScore.textContent = "PC win: "+ pcWin.toString() +" times"
}

function finishGame(){
    const scores = document.querySelector('#scores')
    const finalResult = document.createElement('p')
    scores.appendChild(finalResult)
    
    if (youWin == 5){
        finalResult.textContent = "You win!";
        rockBtn.disabled =true;
        paperBtn.disabled =true;
        scissorBtn.disabled = true;
        resetBtn.style = "";
    }
    
    if(pcWin == 5){
        finalResult.textContent = "Pc win!";
        rockBtn.disabled =true;
        paperBtn.disabled =true;
        scissorBtn.disabled = true;
        resetBtn.style = "";
    }
}

var youWin = 0;
var pcWin = 0;

const playerScore = document.querySelector('#playerScore')
const pcScore = document.querySelector('#pcScore')

const roundResult = document.querySelector('#round-result')
const pRoundResult = document.createElement('p')
roundResult.appendChild(pRoundResult)

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', e => {
    computerSelection = getComputerChoice();
    resultMessage = playRound(e.target.innerHTML, computerSelection)
    pRoundResult.textContent = resultMessage

    updateScore(resultMessage)
    finishGame()

})

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', e => {
    computerSelection = getComputerChoice();
    resultMessage = playRound(e.target.innerHTML, computerSelection)
    pRoundResult.textContent = resultMessage

    updateScore(resultMessage)
    finishGame()

})

const scissorBtn = document.querySelector('#scissor-btn');
scissorBtn.addEventListener('click', e => {
    computerSelection = getComputerChoice();
    resultMessage = playRound(e.target.innerHTML, computerSelection)
    pRoundResult.textContent = resultMessage

    updateScore(resultMessage)
    finishGame()

})

const resetBtn = document.querySelector('#reset-btn')
resetBtn.addEventListener('click', ()=>{
    location.reload();
})
