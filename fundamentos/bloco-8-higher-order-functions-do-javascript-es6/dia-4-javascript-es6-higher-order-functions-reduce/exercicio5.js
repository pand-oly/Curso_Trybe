// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, cur) => {
    return acc + cur.split('').reduce((accumulate, current) => {
      if (current === 'a' || current === 'A') return accumulate + 1;
      return accumulate;
    }, 0);
  }, 0);
}

console.log(containsA());