import usuarioService from "../services/usuariosServices.js";
import jwt from 'jsonwebtoken'

async function buscarUsuarios(req, res, next) {
    try {
        const usuarios = await usuarioService.buscarUsuarios();
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
}

async function buscarUsuarioPorId(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const usuario = await usuarioService.buscarUsuarioPorId(id);

        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        res.json(usuario);
    } catch (error) {
        next(error);
    }
}

async function criarUsuario(req, res, next) {
    try {
        const { nome, email, senha} = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ mensagem: "Campos obrigatórios: nome, email, senha" });
        }

        const novoUsuario = { nome, email, senha };
        const usuarioCriado = await usuarioService.criarUsuario(novoUsuario);

        res.json(usuarioCriado);
    } catch (error) {
        next(error);
    }
}

async function logar(req, res, next) {
    try {
        const { email, senha} = req.body;

        const usuario = await usuariosServices.buscarUsuarioPorEmail(email)

        if (!usuario) {
            throw new Error('Usuario invalido')
        }
        
        if (usuario.senha!== senha) {
            throw new Error('Senha invalida')
        }
    
        const token = jwt.sign({id: usuario.id}, 'backend', {expiresIn: '1h'})
        
        res.send(token);
        
    } catch (error) {
        next(error);
    }
}

async function atualizarUsuario(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const usuarioExistente = await usuarioService.buscarUsuarioPorId(id);

        if (!usuarioExistente) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        const { nome, email, senha } = req.body;

        const usuarioAtualizado = {
            ...usuarioExistente,
            ...(nome && { nome }),
            ...(email && { email }),
            ...(senha && { senha })
        };

        const usuario = await usuarioService.atualizarUsuario(usuarioAtualizado, id);
        res.json(usuario);
    } catch (error) {
        next(error);
    }
}

async function excluirUsuario(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const usuario = await usuarioService.buscarUsuarioPorId(id);

        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        await usuarioService.deletarUsuario(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export default {
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    excluirUsuario,
    logar
};
