import express from 'express';
import VolunteerController from '../controllers/VolunteerController.js';

const volunteerRouter = express.Router();

volunteerRouter.get('/', VolunteerController.getAll);

volunteerRouter.get('/:id', VolunteerController.getById);

volunteerRouter.post('/:id', VolunteerController.add);

export default volunteerRouter;