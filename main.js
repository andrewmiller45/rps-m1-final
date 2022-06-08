var newGame = new Game()



function hide(element){
    element.classList.add('.hidden')
}

function show(element){
    element.classList.remove('.hidden')
}

function selectGamemode (e){
    //newGame.gameMode = e.target.id
    //whichever box gets clicked - modify game choice 
}

function chooseFighter(e){
    //newGame.playerOneChoice = e.target.id
}

function checkWinStates (playerOneChoice, gameMode){
    var cpuChoice = newGame.playerTwo.takeTurn(gameMode)
    for (let i = 0; i < newGame.winStates[cpuChoice].length; i++) {
        if (newGame.winStates[cpuChoice][i].includes(playerOneChoice)) {
            newGame.playerTwo.wins ++
            return console.log(cpuChoice, 'computer wins');            
        }
        else if (newGame.winStates[playerOneChoice][i].includes(cpuChoice)) {
            newGame.playerOne.wins ++
            return console.log(cpuChoice, 'player wins');
        }
        else 
            return console.log(cpuChoice, 'draw');
        }
}

function resetGame(){
    newGame.playerOneChoice = ""
    newGame.playerTwoChoice = ""

}

function changeGameType(){

}