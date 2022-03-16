// Do jeito que está, quando passamos person para a função getNationality o retorno é João is undefined . Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson));
console.log(getNationality(person));