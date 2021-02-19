const medidasPost = require('../api/medidas_post.js');
const medidasGet = require('../api/medidas_get.js');
const emailsPost = require('../api/emails_post.js');
const emailsGet = require('../api/emails_get.js');

module.exports = (app) => {
    app.post('/medidas', medidasPost);
    app.get('/medidas', medidasGet);

    app.post('/emails', emailsPost);
    app.get('/emails', emailsGet);
};
