import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';

const carsRouters = Router();

const createCarController = new CreateCarController();

carsRouters.post('/', createCarController.handle);

export { carsRouters };
