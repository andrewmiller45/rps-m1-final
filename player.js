class Player {
    constructor(name, token){
        this.name = name
        this.token = token
        this.wins = 0
    }

    takeTurn(gameMode){
        if (gameMode === 'vanilla') {
            var fighters = ['rock', 'paper', 'scissors']
            return fighters[Math.floor(Math.random() * fighters.length)]; 
        }
        if (gameMode === 'spicy') {
            var fighters = ['rock', 'paper', 'scissors', 'lizard', 'alien']
            return fighters[Math.floor(Math.random() * fighters.length)];
        }
    }

    increaseWins(){
        this.wins++
    }
}