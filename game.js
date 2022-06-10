class Game {
    constructor(){
        this.id = Date.now()
        this.playerOne = new Player("human", "./assets/human.png")
        this.playerTwo = new Player("computer", "./assets/robot.png")
        this.gameMode 
        this.playerOneChoice 
        this.playerTwoChoice
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
            this.playerTwoChoice = this.playerTwo.takeTurn(gameMode)
            if (this.winStates[this.playerTwoChoice].includes(this.playerOneChoice)) {
                this.playerTwo.increaseWins()
                this.winMsg = `Computer Wins!`
                return console.log(this.playerTwoChoice, 'computer wins')
            }
            else if(this.winStates[playerOneChoice].includes(this.playerTwoChoice)){
                this.playerOne.increaseWins()
                this.winMsg = `Nice! You win!`
                return console.log(this.playerTwoChoice, 'player wins')
            }
            else 
                this.winMsg = `It's a draw!`
                return console.log(this.playerTwoChoice, 'draw')
            }
        }
