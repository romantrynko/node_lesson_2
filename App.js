let usersArray = [
    { name: 'Ivan', age: 25 },
    { name: 'Vova', age: 35 },
    { name: 'Roma', age: 20 },
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
    res.render('main', { isOk: false, userName: 'Ivan' })
})


usersArray.find(value => {
    app.post('/login', (req, res) => {
        const user = req.body;
        if (value.name !== user.name) {
        console.log(req.body);
            usersArray.push( user );
            res.redirect('/users');
        }
        res.redirect('errorPage');

    })
})


// app.get('/', (req,res) => {
//     // console.log(req);

//     res.send('Testing...');
// })

// app.get('/users', (req,res) => {
//     res.write('Roman');
//     res.write('123 ');
//     res.write('123 ');
//     res.write('123 ');
//     res.end();
// })

// app.get('/logs', (req,res) => {
//     res.json({name: "Roman", age: 32})
// })

// app.post('/logs', (req,res) => {

//     console.log(req.body);


//     res.json(req.body);
// })

app.listen(3000, () => {
    console.log('App listens on port: 3000');
});
