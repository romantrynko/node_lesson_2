let usersArray = [
    { name: 'Ivan', age: 25, email: "ivan@net" },
    { name: 'Vova', age: 35, email: "vova@net" },
    { name: 'Roma', age: 20, email: "roma@net" },
]


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

app.get('/users', (req, res) => {
    res.render('users', { users: usersArray });
})

app.get('/', (req, res) => {
    res.render('main');
})

app.get('/login', (req,res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    const { name, age, email } = req.body;
    usersArray.find(el => {
        if(el.email !== email) {
            res.redirect('users');
        }
        // res.redirect('users')
        res.redirect('errorPage');
    })
})

app.post('/signup', (req, res) => {
    const { name, age, email } = req.body;
    usersArray.find(el => {
        if (el.email === email) {
            res.redirect('/login')
        }
        res.redirect('login');
        usersArray.push({ name, age, email });
    })
    res.redirect('/users');


})

app.listen(3000, () => {
    console.log('App listens on port: 3000');
});
