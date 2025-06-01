import { Router } from 'express';
import FiguraController from '../controllers/figuraController.js';

const router = Router();
const figuraController = new FiguraController();

router.get('/', figuraController.formularioCalcularArea);
router.post('/calcular', figuraController.calcularFiguras);

export default router;