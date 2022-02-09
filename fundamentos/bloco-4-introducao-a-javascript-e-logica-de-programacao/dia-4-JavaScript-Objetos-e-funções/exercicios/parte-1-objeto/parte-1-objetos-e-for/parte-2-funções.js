/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

Exemplo de palíndromo: arara .

verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/

function palindromo(word) {
	let breakApart = word.split('');
	let contrary = breakApart.reverse()
	let getTogether = contrary.join('')
	if (word === getTogether) {
		return true
	}
	else {
		return false
	}
}

// console.log(palindromo('arara'))
// console.log(palindromo('desenvolvimento'))

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .*/

function highestValue(arrayNumbers) {
	let maior = 0;
	let index;
	for (let i of arrayNumbers) {
		if (i > maior) {
			maior = i
			index = arrayNumbers.indexOf(i)
		}
	}
	return index
}

// console.log(highestValue([2, 3, 6, 7, 10, 1]))

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .*/

function lowerValue(arrayNumbers) {
	let menor = 999;
	let index;
	for (let i of arrayNumbers) {
		if (i < menor) {
			menor = i
			index = arrayNumbers.indexOf(i)
		}
	}
	return index
}

// console.log(lowerValue([2, 4, 6, 7, 10, 0, -3]))

/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .

Valor esperado no retorno da função: Fernanda .*/

function highestName(arrayNames) {
	let maior = 0;
	let name;
	for (let i in arrayNames) {
		if (arrayNames[i].length > maior) {
			maior = arrayNames[i].length
			name = arrayNames[i]
		}
	}
	return name
}

// console.log(highestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

function bestRept(arrayNumbers) {
	let maior = 0;
	let result;

	for (i of arrayNumbers){
		// este for i sera numero a ser comparado e conta ser seu contadpr de repetições
		let cont = 0;
		for (j of arrayNumbers) {
			// neste for j sera numeros que compararam com i no if
			if (i == j) {
				cont += 1;
			};
		};
		if (cont > maior) {
			maior = cont
			result = i
		};
	};
	return result;
}

// console.log(bestRept([2, 3, 2, 5, 8, 2, 3]))

/* 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .*/

function somatorio(numero) {
	let soma = 0;
	for (let i = numero; i > 0; i--) {
		soma += i
	};
	return soma
}

// console.log(somatorio(5))

/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

Valor de teste: 'trybe' e 'be'

Valor esperado no retorno da função: true

verificaFimPalavra('trybe', 'be') ;

Retorno esperado: true

verificaFimPalavra('joaofernando', 'fernan') ;

Retorno esperado: false */

function verificaFimPalavra(word, ending) {
	if (word.length > ending.length) {
		for (let i = 0; i < ending.length; i++) {
			if (word[word.length - (1 + i)] === ending[ending.length - (1 + i)]) {
				return true
			}
			else {
				return false
			}
		}
	}
	else {
		return false
	};
};

// console.log(verificaFimPalavra('trybe', 'be'))
// console.log(verificaFimPalavra('joaofernando', 'fernan'))