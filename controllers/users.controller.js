const { userService } = require('../services');

module.exports = {

    createUser: (req, res) => {
        try {
            userService.createUser(req.body).then((users) => {
                res.status(201).json(users);
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUsers: (req, res) => {
        try {
            userService.getUsers(req.body).then((users) => {
                res.status(201).json(users);
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserByEmail: (req, res) => {
        const { email } = req.params;

        try {
            userService.getUserByEmail(email).then((users) => {
                users.find(user => {
                    user.email === email;
                    res.status(201).json(user);
                })
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    }

    // deleteUser: (req, res) => {
    //     const { email } = req.body;
    //     console.log(req.body);

    //     fs.readFile(usersPath, (err, data) => {
    //         if (err) throw err;

    //         const users = JSON.parse(data.toString());
    //         const filteredUsers = users.filter((el) => el.email === email);

    //         fs.writeFile(usersPath, JSON.stringify(filteredUsers), (err1) => {
    //             console.log(err1);
    //             res.redirect('/');
    //         });
    //     });
    // }
};
