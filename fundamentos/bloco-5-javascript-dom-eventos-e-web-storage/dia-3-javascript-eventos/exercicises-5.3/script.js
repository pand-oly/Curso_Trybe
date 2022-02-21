function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let blocoForDays = document.querySelector('#days')
console.log(blocoForDays)

function days(arrayOfDias, monthToDays) {
  let blocoDias = monthToDays
  let dias = arrayOfDias
  for (let i of dias) {
    let tagDay = document.createElement('li');
    tagDay.className = 'day'
    tagDay.innerHTML = i
    blocoDias.appendChild(tagDay)
  }
}
days(dezDaysList, blocoForDays)

console.log(blocoForDays)


arrayAllDays = document.querySelectorAll('.day')
function friday(allDays) {
  let cont = 6
  let arrayFridays = []; // este array é para exercicio 5
  for (let i = 0; i < allDays.length; i++) {
    if ((i + 1) === 6) {
      allDays[i].className += ' friday';
      arrayFridays.push(allDays[i].innerHTML)
      cont += 6;
    } else if (cont === i) {
      allDays[i].className += ' friday';
      arrayFridays.push(allDays[i].innerHTML)
      cont += 7;
    }
  }
  return arrayFridays
}
friday(arrayAllDays)


function holiday(arrayAllDays, daysOfHoliday) {
  for (let i of daysOfHoliday) {
    for (let j = 0; j < arrayAllDays.length; j++) {
      let number = parseInt(arrayAllDays[j].innerHTML)
      if (i === number) {
        arrayAllDays[j].className += ' holiday'
      }
    }
  }
}
holiday(arrayAllDays, [24, 25, 31])


function criaBnt(nomeIdBnt, local, nomeBnt) {
  let newBnt = document.createElement('button')
  newBnt.id = nomeIdBnt
  newBnt.innerHTML = nomeBnt
  document.querySelector(local).appendChild(newBnt)
}
criaBnt('btn-holiday', '.buttons-container', 'Feriados')


document.querySelector('#btn-holiday').addEventListener('click',
  function colorir() {
    let backgroundColor = "rgb(238,238,238)"
    let newbackgroundColor = 'aquamarine'
    let aColorir = document.querySelectorAll('.holiday')
    for (let i = 0; i < aColorir.length; i++) {
      if (aColorir[i].style.backgroundColor === newbackgroundColor) {
        aColorir[i].style.backgroundColor = backgroundColor
      } else {
        aColorir[i].style.backgroundColor = newbackgroundColor
      }
    }
  }
)
criaBnt('btn-friday', '.buttons-container', 'Sexta-Ferira')


function sextou(arrayFridays) {
  let alterar = document.querySelectorAll('.friday')
  let newTxtFriday = 'Sextou'
  document.querySelector('#btn-friday').addEventListener('click', function() {
    for (let i = 0; i < alterar.length; i++) {
      if (alterar[i].innerHTML !== newTxtFriday) {
        alterar[i].innerHTML = newTxtFriday
      } else {
        alterar[i].innerHTML = arrayFridays[i]
      }
    }
  })
}
let arrayFridays = friday(arrayAllDays)
sextou(arrayFridays)



function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};
dayMouseOver();
dayMouseOut();


function tarefa(string) {
  let newTarefa = document.createElement('span').innerHTML = string;
  document.querySelector('.my-tasks').append(newTarefa)
}
tarefa('1')


function legenda(cor) {
  let newLegenda = document.createElement('div')
  newLegenda.className = 'task';
  newLegenda.style.backgroundColor = cor
  document.querySelector('.my-tasks').append(newLegenda)
}
legenda('red')


function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
setTaskClass();