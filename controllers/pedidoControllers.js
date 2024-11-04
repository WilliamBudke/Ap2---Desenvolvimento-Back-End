import pedidoService from '../services/pedidosServices.js';

async function buscarPedidos(req, res) {
    const pedido = await pedidoServices.buscarPedidos();
    res.json(pedido);
}

async function buscarPedido(req, res) {
    const id = parseInt(req.params.id);
    const pedido = await pedidoServices.buscarPedidosId(id);
    if (!pedido) {
        return res.status(404).json({ mensagem: "Pedido não encontrado" });
    }
    res.json(pedido);
}

async function cadastrarPedido(req, res) {
    const { id_pedido, id_usuario, valor_total, status, usuario, id_pedido_itens_pedidos_id_pedido } = req.body;
    if (!id_pedido || !id_usuario || !valor_total || !status || !usuario || !id_pedido_itens_pedidos_id_pedido) {
        return res.status(400).json({ mensagem: "Campos obrigatórios: nome, email, matrícula" });
    }
    const pedidoCadastrado = await pedidoServices.cadastrarPedidos(pedido);
    res.json(pedidoCadastrado);
}

async function alterarPedido(req, res) {
    const id = parseInt(req.params.id);
    const pedidoAtualizado = await pedidoServices.buscarPedidosId(id);
    if (!pedidoAtualizado) {
        return res.status(404).json({ mensagem: "Pedido não encontrado" });
    }
    const { id_pedido, id_usuario, valor_total, status, usuario, id_pedido_itens_pedidos_id_pedido } = req.body;
    if (id_pedido) pedidoAtualizado.id_pedido = id_pedido;
    if (id_usuario) pedidoAtualizado.id_usuario = id_usuario;
    if (valor_total) pedidoAtualizado.valor_total = valor_total;
    if (status) pedidoAtualizado.status = status;
    if (usuario) pedidoAtualizado.usuario = usuario;
    if (id_pedido_itens_pedidos_id_pedido) pedidoAtualizado.id_pedido_itens_pedidos_id_pedido = id_pedido_itens_pedidos_id_pedido;
    const pedido = await pedidoServices.atualizarPedidos(pedidoAtualizado);
    res.json(pedido);
}

async function excluirPedido(req, res) {
    const id = parseInt(req.params.id);
    const pedido = await pedidoServices.buscarPedidosId(id);
    if (!pedido) {
        return res.status(404).json({ mensagem: "Pedido não encontrado" });
    }
    await pedidoServices.deletarPedidos(id);
    res.status(204).send();
}

export default {
    buscarPedidos,
    buscarPedido,
    cadastrarPedido,
    alterarPedido,
    excluirPedido
}
