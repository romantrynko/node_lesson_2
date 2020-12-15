module.exports = {
    usersMiddleware: require('./users.middleware'),
    validationMiddleware: require('./validation.middleware'),
    userValidityMiddleware: require('./user-validity.middleware'),
    userUpdateMiddleware: require('./user-update.middleware'),
    emailPassMiddleware: require('./email-password.middleware')
};
