import express from 'express';
import produtoRoutes from './routes/produtosRoutes.js';
import pedidoRoutes from './routes/pedidosRoutes.js';
import usuarioRoutes from './routes/usuariosRoutes.js';
import itensPedidoRoutes from './routes/itens_pedidoRoutes.js';
import jwt from 'jsonwebtoken'
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/produtos', produtoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/itens-pedidos', itensPedidoRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensagem: 'Erro interno no servidor' });
});

export default app;