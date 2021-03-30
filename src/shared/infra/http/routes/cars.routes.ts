import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRouters = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRouters.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRouters.get('/available', listAvailableCarsController.handle);

export { carsRouters };
