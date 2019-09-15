import { Connection } from 'typeorm';
import { Region } from '../entity/region';

import BaseController from './base';
import { Monument } from '../entity/monument';

class RegionController extends BaseController<Region> {
  constructor(connection: Connection) {
    super(Region, connection);
  }

  public async getMonuments(regionId: number): Promise<Monument[]> {
    const regionMonuments = await this.repository
      .createQueryBuilder('region')
      .leftJoinAndSelect('region.monuments', 'monuments')
      .where('region.id = :regionId', { regionId })
      .getOne();

    return regionMonuments.monuments;
  }
}

export default RegionController;