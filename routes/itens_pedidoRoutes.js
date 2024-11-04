import express from 'express';
import itens_pedidosController from '../controllers/itens_pedidoControllers.js';
import autenticar from '../middleware/auth.js';

const router = express.Router();

router.use(autenticar)

router.get('/', autenticar,itens_pedidosController.buscarItensPedido);
router.get('/:id', autenticar,itens_pedidosController.buscarItemPedidoPorId);
router.post('/', autenticar,itens_pedidosController.cadastrarItemPedido);
router.put('/:id', autenticar,itens_pedidosController.alterarItemPedido);
router.delete('/:id', autenticar,itens_pedidosController.excluirItemPedido);

export default router;
