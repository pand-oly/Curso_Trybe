/* Exercicio 1
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.*/

let resultado = 1

for (i = 10; i > 0; i--){
    resultado = i * resultado
}

console.log(resultado)

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.*/

let word = 'tryber';
let cont = word.length -1
let new_word = ''

for (i = cont; i >= 0; i--){
    new_word += word[i]
}

console.log(new_word)

/* 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.*/

let array = ['java', 'javascript', 'python', 'html', 'css'];
let contador = 0;
let maior = 0;
let menor = 999;
let result = [];

for (i = 0; i < array.length; i++){
    contador = array[i].length
    if (maior < contador){
        maior = contador
        result[0] = array[i]
    }
    else if (menor > contador){
        menor = contador
        result[1] = array[i]
    }
    else{

    }
}

console.log('Maior ' + result[0]);
console.log('Menor ' + result[1]);


/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.*/

let numb;

for (i = 0; i <= 50; i++){
    if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0){

    }
    else if (i % i == 0){
        numb = i;
    }
}

console.log(numb)