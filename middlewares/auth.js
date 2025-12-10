const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

function jwtVerify(req, res, next){
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).send({
            ok: false,
            message: 'No se ha proporcionado un token de autenticación'
        })
    }

    jwt.verify(token, secret, (err, payload) => {
        if(err){
            return res.status(401).send({
                ok: false,
                message: 'Token inválido o expirado'
            })
        }

        console.log(payload);
        req.user = payload.user;
        next();
    })
}

module.exports = jwtVerify;