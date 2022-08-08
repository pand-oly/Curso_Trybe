const readline = require('readline-sync');

const sorteio = () => Math.floor(Math.random() * (10 + 1));

const posGame = () => {
  const continuar = readline.question('Deseja continuar? ');

  if (continuar.toLowerCase() === 'sim') {
    game();
  } else if (continuar.toLowerCase() === 'não') {
    console.log('Bye');
  } else {
    console.log('Resposta invalida');
  }
}

const game = () => {
  const numero = readline.questionInt('Diga um numero (de 0 a 10): ')
  const numberoSoretio = sorteio();

  if (numberoSoretio === numero) {
    console.log('Parabéns, número correto!');
  } console.log(`Opa, não foi dessa vez. O número era ${ numberoSoretio }`);

  posGame();
}

function main() {
  game();
}

module.exports = main;