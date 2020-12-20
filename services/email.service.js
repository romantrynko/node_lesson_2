/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        pass: 'password',
        user: 'romantrynko@gmail.com'
    }
});

class EmailService {
    sendMail(userMail) {
        try {
            return transporter.sendMail({
                from: 'noreply',
                to: userMail,
                subject: 'subject',
                html: ''
            });
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new EmailService();
