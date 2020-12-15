const {
    BAD_REQUEST, NO_CONTENT, OK, UNATHORIZED, CREATED
} = require('../config/errorCodes');

module.exports = {
    NOT_VALID_BODY: {
        message: 'Not valid body',
        code: UNATHORIZED
    },

    NOT_VALID_ID: {
        message: 'Not valid Id',
        code: BAD_REQUEST
    },

    NOT_VALID_EMAIL_OR_PASSWORD: {
        message: 'Not valid email or password',
        code: UNATHORIZED
    },

    NOT_VALID_NAME: {
        message: 'Not valid name',
        code: BAD_REQUEST
    },

    WRONG_FIELDS: {
        message: 'Wrong fields',
        code: BAD_REQUEST
    },

    USER_EXISTS: {
        message: 'User already exists',
        code: BAD_REQUEST
    },

    USER_DOESNT_EXIST: {
        message: 'User is not present',
        code: NO_CONTENT
    },

    USER_CREATED: {
        message: 'User created',
        code: CREATED
    },

    OK: {
        message: 'OK',
        code: OK
    }
};
