import proudtosRepositories from "../repositories/pedidosRepositories.js";

async function buscarProdutos(){
    const produtos = await proudtosRepositories.buscarProdutos();
    return produtos;
}

async function buscarProdutosId(id){
    const produtos = await proudtosRepositories.buscarProdutosId(id);
    return produtos;
}

async function criarPedido(id, produtos){
    const pedido = await proudtosRepositories.criarPedido(id, produtos);
    return pedido;
}

async function atualizarPedido(id, produtos){
    const pedido = await proudtosRepositories.atualizarPedido(id, produtos);
    return pedido;
}

async function deletarPedido(id){
    const pedido = await proudtosRepositories.deletarPedido(id);
    return pedido;
}

export default {
    buscarProdutos,
    buscarProdutosId,
    criarPedido,
    atualizarPedido,
    deletarPedido,
}