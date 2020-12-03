const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');

const { usersRouter } = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');

app.engine('.hbs', exprsHbs({
    defaultLayout: false
}));

app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
    res.render('main');
});

app.use('/users', usersRouter);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('App listens on port: 3000');
});
