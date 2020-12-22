/* eslint-disable no-plusplus */
const { errors, ErrorHandler } = require('../../error');
const {
    DOCS_MIMETYPES, DOC_MAX_SIZE, PHOTO_MAX_SIZE, PHOTOS_MIMETYPES
} = require('../../constants/constants');

module.exports = (req, res, next) => {
    try {
        const docs = [];
        const photos = [];

        const allFiles = Object.values(req.files);

        for (let i = 0; i < allFiles.length; i++) {
            const { mimetype, size } = allFiles[i];

            if (DOCS_MIMETYPES.includes(mimetype)) {
                if (size > DOC_MAX_SIZE) {
                    throw new ErrorHandler(errors.TOO_BIG_FILE.message, errors.TOO_BIG_FILE.code);
                }

                docs.push(allFiles[i]);
            } else if (PHOTOS_MIMETYPES.includes(mimetype)) {
                if (size > PHOTO_MAX_SIZE) {
                    throw new ErrorHandler(errors.TOO_BIG_FILE.message, errors.TOO_BIG_FILE.code);
                }

                photos.push(allFiles[i]);
            } else {
                throw new ErrorHandler(errors.WRONG_FILE_TYPE.message, errors.WRONG_FILE_TYPE.code);
            }
        }

        req.docs = docs;
        req.photos = photos;

        next();
    } catch (e) {
        next(e);
    }
};
