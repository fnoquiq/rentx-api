import { Router, Request, Response } from 'express';

import { CategoriesRepository } from '../repositories/CategoryRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
