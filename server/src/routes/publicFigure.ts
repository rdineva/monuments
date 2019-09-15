import * as express from 'express';
import { Request, Response } from 'express-serve-static-core';
import PublicFigureController from '../controller/publicFigure';
import getConnection from '../middleware/connection';

const publicFigure = express.Router({ mergeParams: true });

const getPublicFigureController = (req: Request, res: Response, next: () => void): void => {
  const { connection } = res.locals;
  const publicFigureController = new PublicFigureController(connection);
  res.locals.publicFigureController = publicFigureController;
  next();
};

publicFigure.use(getConnection);
publicFigure.use(getPublicFigureController);

publicFigure.get('/', async (req: Request, res: Response) => {
  const { publicFigureController } = res.locals;
  const {
    limit, offset, orderColumn, order,
  } = req.query;
  const publicFigures = await publicFigureController.getAll({
    limit, offset, orderColumn, order,
  });
  res.json(publicFigures);
});

publicFigure.get('/:publicFigureId', async (req: Request, res: Response) => {
  const { publicFigureController } = res.locals;
  const { publicFigureId } = req.params;
  const publicFigureResult = await publicFigureController.getById(publicFigureId);
  res.json(publicFigureResult);
});

publicFigure.delete('/:publicFigureId', async (req: Request, res: Response) => {
  const { publicFigureController } = res.locals;
  const { publicFigureId } = req.params;
  await publicFigureController.deleteById(publicFigureId);
  res.json(`Public figure  with id = ${publicFigureId} was successfully deleted.`);
});

publicFigure.post('/', async (req: Request, res: Response) => {
  const { publicFigureController } = res.locals;
  const { body } = req;
  const newPublicFigure = await publicFigureController.create(body);
  console.log(`Created new public figure  with name: ${newPublicFigure.name}`);
  res.json(newPublicFigure);
});

publicFigure.put('/:publicFigureId', async (req: Request, res: Response) => {
  const { publicFigureController } = res.locals;
  const { body } = req;
  const { publicFigureId } = req.params;
  await publicFigureController.update(publicFigureId, body);
  res.json(`Update public figure with id = ${publicFigureId}`);
});

publicFigure.get('/:publicFigureId/wikiInfo', async (req: Request, res: Response) => {
  const { publicFigureController } = res.locals;
  const { publicFigureId } = req.params;
  const publicFigureWikiInfo = await publicFigureController.getWikiInfo(publicFigureId);
  res.json(publicFigureWikiInfo);
});

export default publicFigure;
