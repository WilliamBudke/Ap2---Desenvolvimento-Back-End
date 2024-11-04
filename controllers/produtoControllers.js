import produtoService from "../services/produtosServices.js";

async function buscarProdutos(req, res, next) {
    try {
        const produtos = await produtoService.buscarProdutos();
        res.json(produtos);
    } catch (error) {
        next(error);
    }
}

async function buscarProdutoPorId(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const produto = await produtoService.buscarProdutosId(id);

        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        res.json(produto);
    } catch (error) {
        next(error);
    }
}

async function criarProduto(req, res, next) {
    try {
        const { nome, descricao, preco, estoque } = req.body;

        
        if (!nome || !descricao || preco === undefined || estoque === undefined) {
            return res.status(400).json({ mensagem: "Campos obrigatórios: nome, descricao, preco, estoque" });
        }

        const novoProduto = { nome, descricao, preco, estoque };
        const produtoCriado = await produtoService.criarPedido(novoProduto);
        
        res.json(produtoCriado);
    } catch (error) {
        next(error);
    }
}

async function atualizarProduto(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const produtoExistente = await produtoService.buscarProdutosId(id);

        if (!produtoExistente) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        const { nome, descricao, preco, estoque } = req.body;

        const produtoAtualizado = {
            ...produtoExistente,
            ...(nome && { nome }),
            ...(descricao && { descricao }),
            ...(preco !== undefined && { preco }),
            ...(estoque !== undefined && { estoque })
        };

        const produto = await produtoService.atualizarPedido(id, produtoAtualizado);
        res.json(produto);
    } catch (error) {
        next(error);
    }
}

async function excluirProduto(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const produto = await produtoService.buscarProdutosId(id);

        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        await produtoService.deletarPedido(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export default {
    buscarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    excluirProduto
};
