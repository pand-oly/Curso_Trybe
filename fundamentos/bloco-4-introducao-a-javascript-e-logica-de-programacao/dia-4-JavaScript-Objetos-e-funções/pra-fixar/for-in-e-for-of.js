/* 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

*/

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (i in names){
  console.log('Olá ' + names[i])
}

//
console.log('')
//
/* 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
*/

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (i in car){
  console.log(i + ':', car[i])
}