import jwt from 'jsonwebtoken'
export default function autenticar(req, res, next) {
    const token = req.headers["authorization"]?.split('')[1]

    if (!token) {
        return res.status(403).send('Token is required')
    }try{
        const verificado = jwt.verify(token, 'backend')
        req.usuario = verificado
    }catch(e){
        return res.status(401).json({ mensagem: "Token não fornecido" });
    }
}