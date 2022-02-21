let numb1 = document.getElementById('numb1');
let numb2 = document.getElementById('numb2');

let soma = document.getElementById('soma');
let subt = document.getElementById('subt');
let divisao = document.getElementById('divisao');
let multi = document.getElementById('multi');

let clear = document.getElementById('clear');

let resultado = document.getElementById('resultado');

soma.addEventListener('click', function (event) {
  event.preventDefault();
  resultado.innerText = eval(numb1.value) + eval(numb2.value);
});

subt.addEventListener('click', function (event) {
  event.preventDefault();
  resultado.innerText = eval(numb1.value) - eval(numb2.value);
});

divisao.addEventListener('click', function (event) {
  event.preventDefault();
  resultado.innerText = eval(numb1.value) / eval(numb2.value);
});

multi.addEventListener('click', function (event) {
  event.preventDefault();
  resultado.innerText = eval(numb1.value) * eval(numb2.value);
});

clear.addEventListener('click', function (event) {
  event.preventDefault();
  numb1.value = '';
  numb2.value = '';
  resultado.innerText = '';
});
