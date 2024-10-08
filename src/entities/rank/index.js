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

let player = new Rank();
let exit = false;

do {
  console.log("RANK");
  const victory = readline.questionInt("Quantas vitorias tem?: ");
  const loser = readline.questionInt("Quantas derrotas tem?: ");
  const totalVictory = player.victoryAndLoser(victory, loser);
  
  if (totalVictory < 10) {
    player = new Rank(totalVictory, "Ferro");
    console.log(`O Heroi tem um saldo de ${player.victory} esta no nivel de ${player.rank}`);
  } else if (totalVictory > 11 && totalVictory < 20) {
    player = new Rank(totalVictory, "Bronze");
    console.log(`O Heroi tem um saldo de ${player.victory} esta no nivel de ${player.rank}`);
  } else if (totalVictory > 21 && totalVictory < 50) {
    player = new Rank(totalVictory, "Prata");
    console.log(`O Heroi tem um saldo de ${player.victory} esta no nivel de ${player.rank}`);
  } else if (totalVictory > 51 && totalVictory < 80) {
    player = new Rank(totalVictory, "Ouro");
    console.log(`O Heroi tem um saldo de ${player.victory} esta no nivel de ${player.rank}`);
  } else if (totalVictory > 81 && totalVictory < 90) {
    player = new Rank(totalVictory, "Diamante");
    console.log(`O Heroi tem um saldo de ${player.victory} esta no nivel de ${player.rank}`);
  } else if (totalVictory > 91 && totalVictory < 100) {
    player = new Rank(totalVictory, "Lendario");
    console.log(`O Heroi tem um saldo de ${player.victory} esta no nivel de ${player.rank}`);
  } else if (totalVictory >= 101) {
    player = new Rank(totalVictory, "Imortal");
    console.log(`O Heroi tem um saldo de ${player.victory} esta no nivel de ${player.rank}`);
  }else{
    console.log("Nivel de ranking não definido!");
  }
  console.log("------------------------------------------------")
  console.log("Tentar novamente? (s/n)");
  let tryagain = readline.question();
  exit = tryagain === 's'? true : false;
  console.log("------------------------------------------------")

} while (exit);
