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

function resetGame(){
    newGame.playerOneChoice = ""
    newGame.playerTwoChoice = ""

}

function changeGameType(){

}