const fs = require('fs');

const showAll = () => {
  const allSimpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));
  allSimpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

const showById = (id) => {
  const allSimpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));
  const simpson = allSimpsons.find((simpson) => +simpson.id === id);
  // try {
    // } catch (error) {
      // }
  if (!simpson) {
    throw new Error('id não encontrado');
  }
  console.log(simpson);
}

const remove = (ids) => {
  const allSimpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));
  const simpson = allSimpsons.filter(({ id }) => !ids.includes(id));
  console.log(simpson);
  fs.writeFileSync('./simpsons.json', JSON.stringify(simpson));
}

const family = () => {
  const allSimpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = allSimpsons.filter(({ id }) => familyIds.includes(+id));
  console.log(simpsonsFamily);
  fs.writeFileSync('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

const adc = () => {
  const simpsonsFamily = JSON.parse(fs.readFileSync('./simpsonFamily.json', 'utf8'));
  const allSimpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));

  const nelson = allSimpsons.find(({ name }) => name === 'Nelson Muntz');

  simpsonsFamily.push(nelson);
  console.log(simpsonsFamily);
  fs.writeFileSync('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

const change = () => {
  const simpsonsFamily = JSON.parse(fs.readFileSync('./simpsonFamily.json', 'utf8'));

  const newFamily = simpsonsFamily.filter(({ name }) => name !== 'Nelson Muntz');
  console.log(newFamily);

  newFamily.push({ id: `${(simpsonsFamily.length + 1)}`, name: 'Maggie Simpson' });
  console.log(newFamily);
  fs.writeFileSync('./simpsonFamily.json', JSON.stringify(newFamily));
}

function main () {
  showAll();
  showById(1);
  remove(['10', '6']);
  family();
  adc();
  change(); 
}

main();