import express from 'express';
import helpRequestController from '../controllers.js/helpRequestController';

const router = express.Router();

router.get('/', helpRequestController.getAll);

router.get('/:id', helpRequestController.getById);

router.put('/:id', helpRequestController.update);

export default router;
