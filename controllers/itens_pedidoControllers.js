import pedidoService from '../services/pedidosServices.js';

import itens_pedidoServices from "../services/itens_pedidoServices.js";

async function buscarItensPedido(req, res, next) {
    try {
        const itensPedido = await itens_pedidoServices.buscarItens_pedido();
        res.json(itensPedido);
    } catch (error) {
        next(error);
    }
}

async function buscarItemPedidoPorId(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const itemPedido = await itens_pedidoServices.buscarItenspedidoPorId(id);
        if (!itemPedido) {
            return res.status(404).json({ mensagem: "Item de pedido não encontrado" });
        }
        res.json(itemPedido);
    } catch (error) {
        next(error);
    }
}

async function cadastrarItemPedido(req, res, next) {
    try {
        const { id_pedido, id_produto, quantidade, preco_unitario } = req.body;
        
        if (!id_pedido || !id_produto || !quantidade || !preco_unitario) {
            return res.status(400).json({ mensagem: "Campos obrigatórios: id_pedido, id_produto, quantidade, preco_unitario" });
        }
        const novoItemPedido = { id_pedido, id_produto, quantidade, preco_unitario };
        const itemPedidoCadastrado = await itens_pedidoServices.cadastrarItenspedido(novoItemPedido);
        res.status(201).json(itemPedidoCadastrado);
    } catch (error) {
        next(error);
    }
}

async function alterarItemPedido(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const itemPedidoExistente = await itens_pedidoServices.buscarItenspedidoPorId(id);
        
        if (!itemPedidoExistente) {
            return res.status(404).json({ mensagem: "Item de pedido não encontrado" });
        }

        const { id_pedido, id_produto, quantidade, preco_unitario } = req.body;

        const itemPedidoAtualizado = {
            ...itemPedidoExistente,
            ...(id_pedido && { id_pedido }),
            ...(id_produto && { id_produto }),
            ...(quantidade && { quantidade }),
            ...(preco_unitario && { preco_unitario })
        };

        const itemPedido = await itens_pedidoServices.atualizarItenspedido(itemPedidoAtualizado, id);
        res.json(itemPedido);
    } catch (error) {
        next(error);
    }
}

async function excluirItemPedido(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const itemPedido = await itens_pedidoServices.buscarItenspedidoPorId(id);
        
        if (!itemPedido) {
            return res.status(404).json({ mensagem: "Item de pedido não encontrado" });
        }

        await itens_pedidoServices.deletarItenspedido(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export default {
    buscarItensPedido,
    buscarItemPedidoPorId,
    cadastrarItemPedido,
    alterarItemPedido,
    excluirItemPedido
};
