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

        checkWinStates(playerOneChoice, gameChoice){
            var cpuChoice = newGame.playerTwo.takeTurn(gameMode)
            if (newGame.winStates[cpuChoice].includes(playerOneChoice)) {
                newGame.playerTwo.wins ++
                return console.log(cpuChoice, 'computer wins')
            }
            else if(newGame.winStates[playerOneChoice].includes(cpuChoice)){
                newGame.playerOne.wins ++
                return console.log(cpuChoice, 'player wins')
            }
            else 
                return console.log(cpuChoice, 'draw')
            }
        }

}