import { Router } from 'express';
import PedidoController from '../controllers/PedidoController.js';

const router = Router();

router.post('/', PedidoController.store);
router.get('/', PedidoController.index);
router.get('/:id', PedidoController.show);

export default router;