const { jwt } = require('../server/jwt.js');

module.exports = (req, res) => {
    const { usuario, senha } = req.body;

    if(usuario === 'senai115' && senha === 'senai115' ) {
        const id = 1;

        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: (60 * 60 * 2)
        });

        res.json({ auth: true, token: token });
    } else {
        res.status(500).json({message: 'Login inválido!'});
    }

}