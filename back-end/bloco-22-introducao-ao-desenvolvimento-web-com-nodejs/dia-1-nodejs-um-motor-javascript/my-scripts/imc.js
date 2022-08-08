const readline = require('readline-sync');

const imc = (peso, altura) => {
  return (peso / altura ** 2).toFixed(2);
}

const main = () => {
  const peso = readline.question('Digite seu peso em Kg? ');
  const altura = readline.questionFloat('Digite sua altura em Metros? ');
  
  const result = parseFloat(imc(peso, altura));

  if (result < 18.5) {
    console.log(result, 'Abaixo do peso (magreza)');
  } else if (result >= 18.5 || result <= 24.9) {
    console.log(result, 'Peso normal');
  } else if (result < 25.0 || result <= 29.9) {
    console.log(result, 'Acima do peso (sobrepeso)');
  } else if (result >= 30.0 || result <= 34.9) {
    console.log(result, 'Obesidade grau I');
  } else if (result < 35.0 || result <= 39.9) {
    console.log(result, 'Obesidade grau II');
  } else if (result >= 40.0) {
    console.log(result, 'Obesidade graus III e IV');
  }
}

module.exports = main;