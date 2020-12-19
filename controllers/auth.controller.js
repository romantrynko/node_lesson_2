const { o_authService } = require('../services');
const { tokenizer } = require('../utils');

module.exports = {

    loginUser: async (req, res, next) => {
        try {
            const { id } = req.user;
            const token_pair = tokenizer();

            await o_authService.createTokenPair({ user_id: id, ...token_pair });

            res.json(token_pair);
        } catch (e) {
            next(e);
        }
    }
};
