/*  Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
*****

*/

let numb = 5;
for (i = 1; i <= numb; i++){
    let linha = ''; 
    for (j = 0; j <= numb; j ++){
        linha += '*'
    }
    console.log(linha)
}

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****

*/

let linha2 = ''; 
for (i = 1; i <= numb; i++){
    linha2 += '*'
    console.log(linha2)
}


/* 3- Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
*****

*/


for (i = n; i > 0; i--){
    let linha3 = '     '
    final = linha3.replace('     ', '    *')
    
}

let a = '';
a = '*' * 3
console.log(a)