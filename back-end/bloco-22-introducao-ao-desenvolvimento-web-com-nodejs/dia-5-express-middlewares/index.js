require('express-async-errors');
const express = require('express');

const app = express();
app.use(express.json());

app.post('/sales', (req, res) => {});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});