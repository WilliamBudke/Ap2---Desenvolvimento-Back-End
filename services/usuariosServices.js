import usuarioRepositories from "../repositories/usuariosRepositories.js";

async function buscarUsuarios(){
    return await usuarioRepositories.buscarUsuarios();
}

async function buscarUsuarioPorId(id){
    return await usuarioRepositories.buscarUsuarioPorId(id);
}

async function buscarUsuariosPorEmail(email) {
    return await usuarioRepositories.buscarUsuariosPorEmail(email);
}
async function criarUsuario(usuario) {
    return await usuarioRepositories.criarUsuario(usuario);
}

async function atualizarUsuario(usuario, id) {
    return await usuarioRepositories.atualizarUsuario(usuario, id);
}

async function deletarUsuario(id) {
    return await usuarioRepositories.deletarUsuario(id);
}

export default {
    buscarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario,
    buscarUsuariosPorEmail
};