import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function buscarProdutos(){
    try {
        return await prisma.produtos.findMany()
    } catch (error) {
        console.log(error)
    }
}

async function buscarProdutosPorId(id_produto){
    try {
        return await prisma.produtos.findUnique({
            where: {
                id_produto: id_produto,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function criarProdutos(produto){
    const {nome, descricao, preco, estoque, id_produto_itens_pedidos_id_produto} = produto
    try {
        return await prisma.produtos.create({
            data: {
                nome,
                descricao,
                preco,
                estoque,
                id_produto_itens_pedidos_id_produto,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function atualizarProdutos(produto){
    const {id_produto, nome, descricao, preco, estoque, id_produto_itens_pedidos_id_produto} = produto
    try {
        return await prisma.produtos.update({
            where: {
                id_produto: id_produto,
            },
            data: {
                nome,
                descricao,
                preco,
                estoque,
                id_produto_itens_pedidos_id_produto,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function deletarProdutos(id){
    try {
        return await prisma.produtos.delete({
            where: {
                id_produto: id,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export { buscarProdutos, buscarProdutosPorId, criarProdutos, atualizarProdutos, deletarProdutos }