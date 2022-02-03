let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Exercicio 1.
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;*/

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])
}

/* Exercicio 2.
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;*/

let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index]
}

console.log(soma)

/* Exercicio 3.
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/

let soma2 = 0;
let contador = 0;
let media;

for (let index = 0; index < numbers.length; index += 1){
    soma2 += numbers[index];
    contador += 1;
}

media = soma2 / contador;

console.log(media)

/* Exercicio 4.
Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

if (media > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")   
}

/* Exercicio 5.
Utilizando for , descubra qual o maior valor contido no array e imprima-o;*/

let maior = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maior) {
        maior = numbers[index]
    }
}

console.log(maior)

/* Exercicio 6.
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

let quantImpares = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 === 1) {
        quantImpares += 1;
        console.log(numbers[index])
    }
}

if (quantImpares > 0) {
    console.log("Há " + quantImpares + " Numeros impares")
}
else {
    console.log("nenhum valor ímpar encontrado")
}

/* Exercicio 7.
Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/

let menor = 999

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < menor) {
        menor = numbers[index]
    }
}

console.log(menor)

/* Exercicio 7.
Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;*/

let myArray = [];

for (let index = 0; index <= 25; index += 1) {
    myArray.push(index);
}

console.log(myArray)

/* Exercicio 9.
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .*/

let soma3 = 0;

for (let index = 0; index < myArray.length; index += 1) {
    soma3 += myArray[index];
}

resultado = soma3 / 2;

console.log(resultado)