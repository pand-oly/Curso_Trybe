const exercice1 = (a, b, c) => {
  const promisse = new Promise((res, rej) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return rej(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if(result < 50) rej(new Error('Valor muito baixo'));

    res(result);
  });

  return promisse
}

async function main () {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  try{
    console.log(await exercice1(a, b, c));
  } catch(e) {
    console.log(e);
  }
}

main();
