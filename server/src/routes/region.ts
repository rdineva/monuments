import * as express from 'express';
import { Request, Response } from 'express-serve-static-core';
import RegionController from '../controller/region';
import getConnection from '../middleware/connection';

const region = express.Router({ mergeParams: true });

const getRegionController = (req: Request, res: Response, next: () => void): void => {
  const { connection } = res.locals;
  const regionController = new RegionController(connection);
  res.locals.regionController = regionController;
  next();
};

region.use(getConnection);
region.use(getRegionController);

region.get('/', async (req, res) => {
  const { regionController } = res.locals;
  const {
    limit, offset, orderColumn, order,
  } = req.query;
  const regions = await regionController.getAll({
    limit, offset, orderColumn, order,
  });
  res.json(regions);
});

region.get('/:regionId', async (req, res) => {
  const { regionController } = res.locals;
  const { regionId } = req.params;
  const regionResult = await regionController.getById(regionId);
  res.json(regionResult);
});

region.get('/:regionId/monuments', async (req, res) => {
  const { regionController } = res.locals;
  const { regionId } = req.params;
  const regionMonuments = await regionController.getMonuments(regionId);
  res.json(regionMonuments);
});

region.delete('/:regionId', async (req, res) => {
  const { regionController } = res.locals;
  const { regionId } = req.params;
  await regionController.deleteById(regionId);
  res.json(`Region with id = ${regionId} was successfully deleted.`);
});

region.post('/', async (req: Request, res: Response) => {
  const { regionController } = res.locals;
  const { body } = req;
  const newRegion = await regionController.create(body);
  console.log(`Created new region with name: ${newRegion.name}`);
  res.json(newRegion);
});

region.put('/:regionId', async (req: Request, res: Response) => {
  const { regionController } = res.locals;
  const { body } = req;
  const { regionId } = req.params;
  await regionController.update(regionId, body);
  res.json(`Update region with id = ${regionId}`);
});

export default region;