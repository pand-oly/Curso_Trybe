//Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeTagP() {
    let paragraph = document.querySelectorAll('p')
    paragraph[1].innerText = 'Quero ser Pleno .'
}

changeTagP()

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColor(local, cor) {
    let abasBackgroud = document.querySelectorAll(local)
    abasBackgroud[0].style.backgroundColor = cor;

}
changeColor('.main-content', "rgb(76,164,109)")

// Crie uma função que mude a cor do quadrado vermelho para branco.

changeColor('.center-content', "#fff")

// Crie uma função que corrija o texto da tag <h1>.

function corrigi() {
    let corigir = document.querySelector('h1')
    corigir.innerText = 'Exercícios 5.1 - JavaEscripit'
}

corrigi()

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function maiusculo() {
    let arrayParagraph = document.getElementsByTagName('p');
    for (i in arrayParagraph) {
        let newParagraph = arrayParagraph[i].innerText;
        arrayParagraph[i].innerText = newParagraph.toUpperCase();
    }
}

maiusculo()

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function exibir() {
    let arrayParagraph = document.getElementsByTagName('p');
    for (i in arrayParagraph) {
        console.log(arrayParagraph[i].innerHTML)
    }   
}

exibir()