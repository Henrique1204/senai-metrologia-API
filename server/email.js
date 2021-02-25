const mailer = require('nodemailer');
require('dotenv/config');

module.exports = (email, nome, sensor, temp) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.E_USER,
            pass: process.env.E_PASS
        }
    })
    
    const mail = {
        from: 'SENAI <>',
        to: email,
        subject: 'Alerta temperatura',
        html: (`<p>
                Olá ${nome}, a temperatura do sensor ${sensor} atingiu a temperatura ${temp}.<br><br>
                Para acessar o site <a href="www.google.com">Clique aqui</a>.
            </p>`)
    }
    
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}
