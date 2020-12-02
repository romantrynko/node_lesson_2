const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');

const authRouter = require('./routes/auth.router');
const createRouter = require('./routes/create.router');
const errorRouter = require('./routes/error.router');

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

app.use('/', createRouter);

app.use('/auth', authRouter);

app.use('/create', createRouter);

app.use('/error', errorRouter);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('App listens on port: 3000');
});
