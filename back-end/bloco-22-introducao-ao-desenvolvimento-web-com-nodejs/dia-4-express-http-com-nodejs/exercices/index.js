require('express-async-errors');
const express = require('express');
const fs = require('fs').promises;

const readfile = async () => {
  const result = await fs.readFile('./simpsons.json');
  return JSON.parse(result);
}

const wrirtefile = async (params) => {
  await fs.writeFile('./simpsons.json', JSON.stringify(params));
}

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});


app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (+age < 17) return res.status(401).json({ message: 'Unauthorized' });

  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const {name, age} = req.params;

  return res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', async (req, res) => {
  const persons = await readfile();
  return res.status(200).json(persons);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const persons = await readfile();
  // const filter = persons.find((person) => person.id === id);
  const filter = persons.filter((person) => person.id === id)[0];
  if (!filter) {
    const error = new Error('Simpsons not found');
    error.code = 404;
    throw error;
  }
  return res.status(200).json(filter);
});

app.post('/simpsons', async (req, res) => {
  const { id } = req.body;

  const persons = await readfile();
  const verify = persons.find((person) => person.id === id);

  if (verify) return res.status(409).json({ message: 'id already exists' });

  persons.push(req.body);
  await wrirtefile(persons);
  
  res.status(204).end();
});

app.use((err, req, res, next) => {
  const { message } = err;
  return res.status(500).json({ message });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
