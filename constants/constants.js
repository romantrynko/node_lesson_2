module.exports = {
    CURRENT_YEAR: new Date().getFullYear(),
    USERS_TABLE: 'users',
    CARS_TABLE: 'cars',
    O_AUTH_TABLE: 'o_auth',
    DATABASE_NAME: 'usersdb',

    PHOTO_MAX_SIZE: 2 * 1024 * 1024,
    DOC_MAX_SIZE: 5 * 1024 * 1024,
    PHOTOS_MIMETYPES: [
        'image/gif',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/tiff',
        'image/webp'
    ],
    DOCS_MIMETYPES: [
        'application/msword',
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
};
