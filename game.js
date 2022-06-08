class Game {
    constructor(playerOne, playerTwo, gameMode){
        this.id = Date.now()
        this.playerOne = new Player()
        this.playerTwo = new Player()
        this.gameMode = this.gameMode
        this.winStates = {
            rock: ['scissors', 'lizard'],
            paper: ['rock', 'alien'],
            scissors: ['paper', 'lizard'],
            lizard: ['paper','alien'], 
            alien: ['scissors', 'rock']
        }
    }
}