const { BAD_REQUEST } = require('../config/errorCodes');

module.exports = {
    NOT_VALID_ID: {
        message: 'User ID must be bigger than 0',
        code: BAD_REQUEST
    }
};
