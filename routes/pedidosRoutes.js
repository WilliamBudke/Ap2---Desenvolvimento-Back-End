import express from 'express';
import pedidoController from '../controllers/pedidoControllers.js';
import autenticar from '../middleware/auth.js';

const router = express.Router();

router.use(autenticar)


router.get('/', autenticar,pedidoController.buscarPedidos);
router.get('/:id', autenticar,pedidoController.buscarPedido);
router.post('/', autenticar,pedidoController.cadastrarPedido);
router.put('/:id', autenticar,pedidoController.alterarPedido);
router.delete('/:id', autenticar,pedidoController.excluirPedido);

export default router;
