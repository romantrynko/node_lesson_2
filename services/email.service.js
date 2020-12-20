/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');
const templatesInfo = require('../email-templates');
const { ErrorHandler, errors: { WRONG_TEMPLATE_NAME } } = require('../error');
const { ROOT_EMAIL, ROOT_EMAIL_PASS, ROOT_EMAIL_SERVICE } = require('../config/config');

const transporter = mailer.createTransport({
    service: ROOT_EMAIL_SERVICE,
    auth: {
        pass: ROOT_EMAIL_PASS,
        user: ROOT_EMAIL
    }
});

const emailTemplates = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
});

const sendMail = async (userMail, action, context) => {
    try {
        const templateInfo = templatesInfo[action];

        if (!templateInfo) {
            throw new ErrorHandler(WRONG_TEMPLATE_NAME.message);
        }

        const html = await emailTemplates.render(templateInfo.templateName, context);

        return transporter.sendMail({
            from: 'noreply',
            to: userMail,
            subject: templateInfo.subject,
            html
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    sendMail
};
