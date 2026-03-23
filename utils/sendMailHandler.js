let nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 25,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: "8ec15e88e5825a",
        pass: "882db9117ed4b1",
    },
});
module.exports = {
    sendMail: async function (to, url) {
        await transporter.sendMail({
            from: '"admin@" <admin@nnptud.com>',
            to: to,
            subject: "mail reset passwrod",
            text: "lick vo day de doi passs", // Plain-text version of the message
            html: "lick vo <a href=" + url + ">day</a> de doi passs", // HTML version of the message
        });
    },
    sendPasswordMail: async function (to, username, password) {
        await transporter.sendMail({
            from: '"admin" <admin@nnptud.com>',
            to: to,
            subject: "Your New Account Password",
            text: `Hello ${username},\n\nYour account has been created. Your password is: ${password}\n\nPlease keep it secure.`,
            html: `<p>Hello <b>${username}</b>,</p><p>Your account has been created.</p><p>Your password is: <b>${password}</b></p><p>Please keep it secure.</p>`,
        });
    }
}