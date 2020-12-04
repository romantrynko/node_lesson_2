const express = require('express');
const path = require('path');

const { usersRouter } = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));

app.use('/users', usersRouter);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('App listens on port: 3000');
});
