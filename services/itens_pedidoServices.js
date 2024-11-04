import itens_pedidoRepositories from "../repositories/itens_pedidoRepositories.js";

async function buscarItens_pedido() {
    return itens_pedidoRepositories.buscarItens_pedido();
}

async function buscarItenspedidoPorId(id) {
    return itens_pedidoRepositories.buscarItens_pedidoPorId(id);
}

async function cadastrarItenspedido(itens_pedido) {
    return itens_pedidoRepositories.cadastrarItens_pedido(itens_pedido);
}

async function atualizarItenspedido(itens_pedido, id) {
    return itens_pedidoRepositories.atualizarItens_pedido(itens_pedido, id);
}

async function deletarItenspedido(id) {
    return itens_pedidoRepositories.deletarItens_pedido(id);
}

export default{
    buscarItens_pedido,
    buscarItenspedidoPorId,
    cadastrarItenspedido,
    atualizarItenspedido,
    deletarItenspedido,
 };
