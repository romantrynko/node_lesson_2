const bcrypt = require('bcrypt');
const { ErrorHandler, errors: { NOT_VALID_EMAIL_OR_PASSWORD } } = require('../error');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hash) => {
        const isPassEquals = await bcrypt.compare(password, hash);

        if (!isPassEquals) {
            throw new ErrorHandler(NOT_VALID_EMAIL_OR_PASSWORD.message, NOT_VALID_EMAIL_OR_PASSWORD.code);
        }
    }
};
