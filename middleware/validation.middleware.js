module.exports = {
    isIdCorrect: (req, res, next) => {
        try {
            const { id } = req.params;

            if (!id || id < 0 || Number.isInteger(+id)) {
                throw new Error('Not valid ID');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    isUserUpdateCorrect: (req, res, next) => {
        try {
            const {
                email, name, password, ...other
            } = req.body;

            if (email && email.length < 5) {
                throw new Error('Not valid email');
            }

            if (name && name.length < 3) {
                throw new Error('Not valid name');
            }

            if (password && password.length < 5) {
                throw new Error('Not valid password');
            }

            if (Object.values(other).length) {
                throw new Error('Wrong fields');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    isUserCreateCorrect: (req, res, next) => {
        try {
            const {
                email, name, password, ...other
            } = req.body;

            if (!email || email.length < 5) {
                throw new Error('Not valid email');
            }

            if (!name || name.length < 3) {
                throw new Error('Not valid name');
            }

            if (!password || password.length < 5) {
                throw new Error('Not valid password');
            }

            if (Object.values(other).length) {
                throw new Error('Wrong fields');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
