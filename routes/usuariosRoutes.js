import express from 'express';
import usuarioController from '../controllers/usuarioControllers.js';
import autenticar from '../middleware/auth.js';

const router = express.Router();

router.use(autenticar)

router.get('/', autenticar,usuarioController.buscarUsuarios);
router.get('/:id', autenticar,usuarioController.buscarUsuarioPorId);
router.post('/', usuarioController.criarUsuario);
router.put('/:id', autenticar,usuarioController.atualizarUsuario);
router.delete('/:id', autenticar,usuarioController.excluirUsuario);
router.post('/login');

export default router;
