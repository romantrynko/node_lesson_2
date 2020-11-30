const express = require('express');
const exprsHbs = require('express-handlebars');
const fs = require('fs');
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


const usersPath = path.join(process.cwd(), 'users.json');

let isLoggedIn = false;
let loggedUser = '';
let errorMessage = '';

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/users', (req, res) => {
    if (!isLoggedIn) {
        res.redirect('/register');
        return;
    }
    fs.readFile(usersPath, (err, data) => {
        const users = JSON.parse(data.toString());
        res.render('users', { users, loggedUser });
    })
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});


app.get('/error', (req, res) => {
    res.render('errorPage', {errorMessage});
});

app.post('/register', (req, res) => {
    const { email, password } = req.body;

    fs.readFile(usersPath, (err, data) => {
        if (err) throw err;

        const users = JSON.parse(data.toString());
        const registeredUser = users.find(user => user.email === email && user.password === password);

        if (registeredUser) {
            res.redirect('/error');
            errorMessage = 'user allready exists';
            return;
        }
        isLoggedIn = true;

        users.push(req.body);
        fs.writeFile(usersPath, JSON.stringify(users), (err) => {
            console.log(err);
        });
        res.redirect('/login');
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    fs.readFile(usersPath, (err, data) => {
        if (err) throw err;

        const users = JSON.parse(data.toString());
        const emailTrue = users.find(user => user.email === email && user.password === password);

        if (!emailTrue) {
            res.redirect('/error');
            return;
        }
        isLoggedIn = true;
        loggedUser = emailTrue.name;
        res.redirect('/users');
    });
});

app.post('/logout', (req, res) => {
    isLoggedIn = false;
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('App listens on port: 3000');
});
