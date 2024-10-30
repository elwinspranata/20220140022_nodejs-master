const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.js')
const port = 4000;

app.use(express.json());

app.use('/todos', todoRoutes);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('elwin!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});