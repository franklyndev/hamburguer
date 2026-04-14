import { Router } from 'express';
import EntregaController from '../controllers/EntregaController.js';

const router = Router();

router.post('/', EntregaController.store);
router.get('/', EntregaController.index);
router.get('/:id', EntregaController.show);

export default router;