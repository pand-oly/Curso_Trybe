const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

function main() {
  const quest = readline.questionInt(
    `Qual das funções devo execultar:
      1: Calcular imc
      2: Calcular velocidade média
      3: Jogo de adivinhação
      
      R: `
  )

  if (quest === 1) {
    imc();
  } else if (quest === 2) {
    velocidade();
  } else if (quest === 3) {
    sorteio();
  } else {
    console.log('Não entendi');
  }
}

main();