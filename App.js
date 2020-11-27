const { users } = require('./users');

const express = require('express');
const exprsHbs = require('express-handlebars');
const path = require('path');

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

app.get('/users', (req, res) => {
    res.render('users', { users: users });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/error', (req, res) => {
    res.render('errorPage');
});

app.post('/register', (req, res) => {
    const { name, age, email } = req.body;
    users.map(el => {
        if (el.email !== email) {
            users.push(name, age, email);
            res.redirect('/users');
            brake;
        }
        res.redirect('/login');
    })
});

app.post('/login', (req, res) => {
    const { email } = req.body;
    users.find(el => {
        if (el.email.toLocaleLowerCase() === email.toLocaleLowerCase()) {
            res.redirect('/users');
        }
        res.redirect('/error');
    })
});

app.get('/logout', (req, res) => {
    users.pop();
    res.redirect('/')
});

app.listen(3000, () => {
    console.log('App listens on port: 3000');
});
