class Player {
  constructor(name, nationality) {
    this.name = name;
    this.nationality = nationality;
  }
  playerConsole() {
    console.log(
      `Player name is ${this.name} and nationality is ${this.nationality}`
    );
  }
}

class Club extends Player {
  constructor(clubName, name, nationality) {
    super(name, nationality);
    this.clubName = clubName;
  }
  ClubConsole() {
    console.log(
      `Club name is ${this.clubName}, Player name is ${this.name} and Nationality is ${this.nationality}`
    );
  }
}

const Player1 = new Club("chelsea", "jack", "bangladesh");
Player1.ClubConsole();
