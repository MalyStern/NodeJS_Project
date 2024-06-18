import express from 'express';
import helpRequestController from "../controllers/helpRequestController.js"

const requestRouter = express.Router();

requestRouter.get('/', helpRequestController.getAll);

requestRouter.get('/:id', helpRequestController.getById);

requestRouter.put('/:id', helpRequestController.update);

export default requestRouter;
