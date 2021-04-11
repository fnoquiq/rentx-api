import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { carsRouters } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { passwordRoutes } from './password.routes';
import { rentalRoutes } from './rental.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRouters } from './users.routes';

const router = Router();

router.use(authenticateRoutes);
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRouters);
router.use('/cars', carsRouters);
router.use('/rentals', rentalRoutes);
router.use('/password', passwordRoutes);

export { router };
