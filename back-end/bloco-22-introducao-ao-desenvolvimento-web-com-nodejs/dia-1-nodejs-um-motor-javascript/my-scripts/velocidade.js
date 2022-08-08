const readline = require('readline-sync');

const velocidade_media = (dist, temp) => dist / temp;

function main () {
  const distancia = readline.questionInt('Digite a distancia percorrrida (em Metros): ');
  const tempo = readline.questionInt('Digite o tempo da viagem (em segundos): ');

  const result = velocidade_media(distancia, tempo);

  console.log(result);
}

module.exports = main;