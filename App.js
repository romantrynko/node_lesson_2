const express = require('express');
const path = require('path');

const { usersRouter, carsRouter } = require('./routes');

const app = express();

const db = require('./dataBase').getInstance();

db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));

app.use('/users', usersRouter);

app.use('/cars', carsRouter);

app.listen(5000, () => {
    // eslint-disable-next-line no-console
    console.log('App listens on port: 5000');
});
