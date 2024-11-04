import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()

async function buscarItensPedido() {
    try {
        return await prisma.itens_pedido.findMany()
    } catch (error) {
        console.log(error)
    }
}

async function buscarItensPedidoPorId(id_itens_pedido) {
    try {
        return await prisma.itens_pedido.findUnique({
            where:{
                id_item: id_itens_pedido,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function criarItensPedido(ItensPedido) {
    const {id_pedido, id_produto, quantidade, preco_unitario, pedido, produto} = ItensPedido
    try {
        return await prisma.itens_pedido.create({
            data: {
                id_pedido,
                id_produto,
                quantidade,
                preco_unitario,
                pedido,
                produto
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function atualizarItensPedido(ItensPedido){
    const { id_item, id_pedido, id_produto, quantidade, preco_unitario, pedido, produto} = ItensPedido
    try {
        return await prisma.itens_pedido.update({
            where: {id_item},
            data:   {
                id_pedido,
                id_produto,
                quantidade,
                preco_unitario,
                pedido,
                produto
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function deletarItensPedido(id_itens_pedido) {
    try {
        return await prisma.itens_pedido.delete({
            where: {id_itens_pedido}
        })
    } catch (error) {
        console.log(error)
    }
}

export default { buscarItensPedido, buscarItensPedidoPorId, criarItensPedido, atualizarItensPedido, deletarItensPedido }