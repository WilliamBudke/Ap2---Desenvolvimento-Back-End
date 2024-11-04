import pedidosRepositories from "../repositories/pedidosRepositories.js";

async function buscarPedidos() {
    return await pedidosRepositories.buscarPedidos()    
}

async function buscarPedidosId(id) {
    return await pedidosRepositories.buscarPedidosId(id)    
}

async function cadastrarPedidos(id, nome, valor) {
    return await pedidosRepositories.cadastrarPedido(id, nome, valor)    
}

async function atualizarPedidos(id, nome, valor) {
    return await pedidosRepositories.atualizarPedido(id, nome, valor)    
}

async function deletarPedidos(id) {
    return await pedidosRepositories.deletarPedido(id)    
}


export default{
    buscarPedidos,
    buscarPedidosId,
    cadastrarPedidos,
    atualizarPedidos,
    deletarPedidos
 }