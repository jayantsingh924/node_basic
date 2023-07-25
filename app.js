// app.js
const express = require('express');
const path = require('path')


const app = express();
const port = 3000;

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
