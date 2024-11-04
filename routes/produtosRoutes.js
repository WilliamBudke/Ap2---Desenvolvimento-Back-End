import express from 'express';
import produtoController from '../controllers/produtoControllers.js';
import autenticar from '../middleware/auth.js';

const router = express.Router();

router.use(autenticar)

router.get('/', autenticar,produtoController.buscarProdutos);
router.get('/:id', autenticar,produtoController.buscarProdutoPorId);
router.post('/', autenticar,produtoController.criarProduto);
router.put('/:id', autenticar,produtoController.atualizarProduto);
router.delete('/:id', autenticar,produtoController.excluirProduto);

export default router;
