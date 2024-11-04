import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function buscarPedidos(){
    try {
        return await prisma.pedidos.findMany()
    } catch (error) {
        console.log(error)
    }
}

async function buscarPedidosPorId(id_pedido){
    try {
        return await prisma.pedidos.findUnique({
            where:{
                id_pedido: id_pedido,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function criarPedido(pedido){
    const {id_usuario, valor_total, status, usuario, id_pedido_itens_pedidos_id_pedido} = pedido
    try {
        return await prisma.pedidos.create({
            data: {
                id_usuario,
                valor_total,
                status,
                usuario,
                id_pedido_itens_pedidos_id_pedido,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function atualizarPedido(pedido){
    const {id_pedido, id_usuario, valor_total, status, usuario, id_pedido_itens_pedidos_id_pedido} = pedido
    try {
        return await prisma.pedidos.update({
            where:{
                id_pedido: id_pedido,
            },
            data: {
                id_usuario,
                valor_total,
                status,
                usuario,
                id_pedido_itens_pedidos_id_pedido,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function deletarPedido(id_pedido){
    try {
        return await prisma.pedidos.delete({
            where:{
                id_pedido: id_pedido,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default {buscarPedidos, buscarPedidosPorId, criarPedido, atualizarPedido, deletarPedido}