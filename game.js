class Game {
    constructor(){
        this.id = Date.now()
        this.playerOne = new Player("human", "./assets/human.png")
        this.playerTwo = new Player("computer", "./assets/robot.png")
        this.gameMode 
        this.playerOneChoice 
        this.winMsg
        this.winStates = {
            rock: ['scissors', 'lizard'],
            paper: ['rock', 'alien'],
            scissors: ['paper', 'lizard'],
            lizard: ['paper','alien'], 
            alien: ['scissors', 'rock']
        }
    }
        checkWinStates(playerOneChoice, gameMode){
            var cpuChoice = this.playerTwo.takeTurn(gameMode)
            if (this.winStates[cpuChoice].includes(this.playerOneChoice)) {
                this.playerTwo.increaseWins()
                this.winMsg = `Computer Wins!`
                return console.log(cpuChoice, 'computer wins')
            }
            else if(this.winStates[playerOneChoice].includes(cpuChoice)){
                this.playerOne.increaseWins()
                this.winMsg = `Nice!  You win!`
                return console.log(cpuChoice, 'player wins')
            }
            else 
                this.winMsg = `It's a draw!`
                return console.log(cpuChoice, 'draw')
            }
        }
