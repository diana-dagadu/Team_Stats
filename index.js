const team = {
    players: [
        {
            firstName: 'Setphen',
            lastName: 'Appiah',
            age: 39
        },
        {
            firstName: 'Asamoah',
            lastName: 'Gyan',
            age: 34
        },
        {
            firstName: 'John',
            lastName: 'Mensah',
            age: 28
        }

    ],
    games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        }
    ],

    get games() {
        return this._games;
    },
    get players() {
        return this._players;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        };
        this.games.push(game);
    }

};


// adding players to team
team.addPlayer('Steph', 'Curry', 28);  
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);


// adding games to the team
team.addGame('RBF', 30, 0);  
team.addGame('Hornets', 13, 8);
team.addGame('Eagles', 2, 1);

console.log(team._players); 
console.log(team._games); 