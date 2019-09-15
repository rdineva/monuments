import * as express from 'express';
import { Request, Response } from 'express-serve-static-core';
import getConnection from '../middleware/connection';
import MonumentController from '../controller/monument';

const monument = express.Router({ mergeParams: true });

const getMonumentController = (req: Request, res: Response, next: () => void): void => {
  const { connection } = res.locals;
  const monumentController = new MonumentController(connection);
  res.locals.monumentController = monumentController;
  next();
};

monument.use(getConnection);
monument.use(getMonumentController);

monument.get('/', async (req: Request, res: Response) => {
  const { monumentController } = res.locals;
  const {
    limit, offset, orderColumn, order,
  } = req.query;
  const monuments = await monumentController.getAll({
    limit, offset, orderColumn, order,
  });
  res.json(monuments);
});

monument.get('/:monumentId', async (req: Request, res: Response) => {
  const { monumentController } = res.locals;
  const { monumentId } = req.params;
  const monumentResult = await monumentController.getById(monumentId);
  res.json(monumentResult);
});

monument.get('/:monumentId/publicFigures', async (req: Request, res: Response) => {
  const { monumentController } = res.locals;
  const { monumentId } = req.params;
  const monumentPublicFigures = await monumentController.getPublicFigures(monumentId);
  res.json(monumentPublicFigures);
});

monument.get('/:monumentId/location', async (req: Request, res: Response) => {
  const { monumentController } = res.locals;
  const { monumentId } = req.params;
  const monumentLocation = await monumentController.getLocation(monumentId);
  res.json(monumentLocation);
});

monument.delete('/:monumentId', async (req: Request, res: Response) => {
  const { monumentController } = res.locals;
  const { monumentId } = req.params;
  await monumentController.deleteById(monumentId);
  res.json(`Monument with id = ${monumentId} was successfully deleted.`);
});

monument.post('/', async (req: Request, res: Response) => {
  const { monumentController } = res.locals;
  const { body } = req;
  const newMonument = await monumentController.create(body);
  console.log(`Created new monument with name: ${newMonument.name}`);
  res.json(newMonument);
});

monument.put('/:monumentId', async (req: Request, res: Response) => {
  const { monumentController } = res.locals;
  const { body } = req;
  const { monumentId } = req.params;
  await monumentController.update(monumentId, body);
  res.json(`Update monument with id = ${monumentId}`);
});

export default monument;
