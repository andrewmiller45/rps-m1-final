class Game {
    constructor(){
        this.id = Date.now()
        this.playerOne = new Player("human", "./assets/human.png")
        this.playerTwo = new Player("computer", "./assets/robot.png")
        this.gameMode
        this.playerOneChoice
        this.playerTwoChoice 
        this.winStates = {
            rock: ['scissors', 'lizard'],
            paper: ['rock', 'alien'],
            scissors: ['paper', 'lizard'],
            lizard: ['paper','alien'], 
            alien: ['scissors', 'rock']
        }
    }
    
    checkWinStates (playerOneChoice, gameMode){
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
}

//if [choice],  for loop through this.winstates[choice]
// if the other choice equals any of the items in that array, you win

