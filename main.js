var newGame = new Game()

var vanillaButton = document.getElementById('vanilla')
var spicyButton = document.getElementById('spicy')
var changeGameButton = document.getElementById('changeGame')
var humanWins = document.getElementById('humanWins')
var cpuWins = document.getElementById('cpuWins')
var gameChoiceContainer = document.querySelector('.choices-styling')
var fighterIconsView = document.querySelector('.choices-container')
var resultView = document.getElementById('resultMsg')
var choiceHeader = document.getElementById('gameChoicePrompt')
var showdown = document.querySelector('.showdown')
var battleView = document.getElementById('battleView')

gameChoiceContainer.addEventListener('click', selectGamemode)
changeGameButton.addEventListener('click', returnToGameSelect)
fighterIconsView.addEventListener('click', chooseFighter)

function hide(element){
    element.classList.add('hidden')
}

function show(element){
    element.classList.remove('hidden')
}

function selectGamemode (e){
    if(e.target.parentElement.id === 'spicy'){
        hide(gameChoiceContainer)
        show(changeGameButton)
        hide(choiceHeader)
        newGame.gameMode = 'spicy'
        fighterIconsView.innerHTML = 
        `<article class="choices-container">
          <img class="fighter" id="alien" src="./assets/alien.png" alt="alien image">
          <img class="fighter" id="paper" src="./assets/paper.png" alt="paper image">
          <img class="fighter" id="scissors"  src="./assets/scissors.png" alt="scissors image">
          <img class="fighter" id="lizard"  src="./assets/lizard.png" alt="lizard image">
          <img class="fighter" id="rock"  src="./assets/rock.png" alt="rock image">
        </article>`
    }

    if(e.target.parentElement.id === 'vanilla'){
        hide(gameChoiceContainer)
        show(changeGameButton)
        hide(choiceHeader)
        newGame.gameMode = 'vanilla'
        fighterIconsView.innerHTML = 
            `<article class="choices-container">
            <img class="fighter" id="paper"  src="./assets/paper.png" alt="paper image">
            <img class="fighter" id="scissors"  src="./assets/scissors.png" alt="scissors image">
            <img class="fighter" id="rock"  src="./assets/rock.png" alt="rock image">
            </article>`
    }
}

function returnToGameSelect(){
    show(gameChoiceContainer)
    hide(changeGameButton)
    show(choiceHeader)
    fighterIconsView.innerHTML = "" 
}

function chooseFighter(e){
    newGame.playerOneChoice = e.target.id
    runGame()
    updateWinsView()
    hide(fighterIconsView)
    setTimeout(resetGame, 2000)
}

function resetGame(){
    newGame.playerOneChoice = ""
    newGame.playerTwoChoice = ""
    hide(resultView)
    show(fighterIconsView)
}

function runGame(){
    newGame.checkWinStates(newGame.playerOneChoice, newGame.gameMode)
    displayResult()
}

function updateWinsView(){
    humanWins.innerText = `Wins: ${newGame.playerOne.wins}`
    cpuWins.innerText = `Wins: ${newGame.playerTwo.wins}`
}

function displayResult(){
    resultView.innerText = `${newGame.winMsg}`   
    show(resultView)
}

function displayPlayerChoices(){
    
}