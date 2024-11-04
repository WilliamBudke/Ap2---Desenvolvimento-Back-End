import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function buscarUsuarios(){
    try {
       return await prisma.usuarios.findMany()
    } catch (error) {
        console.log(error)
    }
}

async function buscarUsuariosPorId(id){
    try {
        return await prisma.usuarios.findUnique({
            where: { id_usuario: id },
        })
    } catch (error) {
        console.log(error)
    }
}

async function buscarUsuariosPorEmail(email){
    try {
        return await prisma.usuarios.findUnique({
            where: { email: email },
        })
    } catch (error) {
        console.log(error)
    }
}

async function criarUsuario(usuario){
    const { nome, email, senha, pedidos } = usuario
    try {
        return await prisma.usuarios.create({
            data: {
                nome,
                email,
                senha,
                pedidos: { connect: { id_pedido: pedidos } },
            },
        })
    } catch (error) {
        console.log(error)
    }
}

async function atualizarUsuario(id, usuario){
    const { nome, email, senha, pedidos } = usuario
    try {
        return await prisma.usuarios.Update({
            where: { id_usuario: id },
            data: {
                nome,
                email,
                senha,
                pedidos: { connect: { id_pedido: pedidos } },
            },
        })
    } catch (error) {
        console.log(error)
    }
}

async function deletarUsuario(id){
    try {
       return await prisma.usuarios.delete({
         where: { id_usuario: id },
       })
    } catch (error) {
        console.log(error)
    }
}

export default { buscarUsuarios, buscarUsuariosPorId, criarUsuario, atualizarUsuario, deletarUsuario, buscarUsuariosPorEmail }