const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');

const userRouter = require('./routes/user.router');
const loginRouter = require('./routes/login.router');
const logoutRouter = require('./routes/logout.router');
const registerRouter = require('./routes/register.router');
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

app.use('/users', userRouter);

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use('/error', errorRouter);

app.use('/logout', logoutRouter);

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('App listens on port: 3000');
});
