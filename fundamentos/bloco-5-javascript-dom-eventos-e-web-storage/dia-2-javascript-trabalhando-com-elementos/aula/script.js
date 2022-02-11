// Acesse o elemento elementoOndeVoceEsta .
let element = document.getElementById('elementoOndeVoceEsta')

console.log(element)

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
element.parentElement.style.backgroundColor = 'gray'

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText = 'Adcionei um texto'

// Acesse o primeiroFilho a partir de pai .
document.getElementById('pai').childNodes
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').firstChild())
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .
