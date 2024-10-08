//package USER_INPUT
const readline = require("readline-sync");

class Rank {
  constructor(victory, rank) {
    this.victory = victory;
    this.rank = rank;
  }

  victoryAndLoser(v, l) {
    return v - l;
  }
}

console.log("RANK");
const victory = readline.questionInt("Quantas vitorias tem? ");
const loser = readline.questionInt("Quantas derrotas tem? ");

let player = new Rank();
const totalVictory = player.victoryAndLoser(victory, loser);

if (totalVictory < 10) {
  player = new Rank(totalVictory, "Ferro");
} else if (totalVictory > 11 && totalVictory < 20) {
  player = new Rank(totalVictory, "Bronze");
} else if (totalVictory > 21 && totalVictory < 50) {
  player = new Rank(totalVictory, "Prata");
} else if (totalVictory > 51 && totalVictory < 80) {
  player = new Rank(totalVictory, "Ouro");
} else if (totalVictory > 81 && totalVictory < 90) {
  player = new Rank(totalVictory, "Diamante");
} else if (totalVictory > 91 && totalVictory < 100) {
  player = new Rank(totalVictory, "Lendario");
} else if (totalVictory >= 101) {
  player = new Rank(totalVictory, "Imortal");
}

console.log(
  `O Heroi tem um saldo de ${player.victory} esta no nivel de ${player.rank}`
);
