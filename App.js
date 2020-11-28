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

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/users', (req, res) => {
    fs.readFile(usersPath, (err, data) => {
        const users = JSON.parse(data.toString())
        res.render('users', { users: users });
    })
});

app.get('/error', (req, res) => {
    res.render('errorPage');
});


app.post('/register', (req, res) => {
    const { email, password } = req.body;

    fs.readFile(usersPath, (err, data) => {
        if (err) throw err;

        const users = JSON.parse(data.toString());
        const registeredUser = users.find(user => {
            user.email === email && user.password === password;
        });

        if (!registeredUser) {
            users.push(req.body);
            fs.writeFile(usersPath, JSON.stringify(users));
            res.redirect('/login');
        }
        res.redirect('/login');


    });


});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    fs.readFile(usersPath, (err, data) => {
        if (err) throw err;

        const users = JSON.parse(data.toString());
        const emailTrue = users.find(user => (user.email === email && user.password === password));
        if (!emailTrue) {
            res.redirect('/error');
        }
        res.redirect('/users');
    })


});

app.get('/logout', (req, res) => {
    fs.readFile(usersPath, (err, data) => {
        const users = JSON.parse(data.toString())
        users.pop();
    });
    res.render('main');
});

app.listen(3000, () => {
    console.log('App listens on port: 3000');
});
