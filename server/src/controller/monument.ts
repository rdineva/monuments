import { Connection } from 'typeorm';
import { Monument } from '../entity/monument';
import { PublicFigure } from '../entity/publicFigure';
import BaseController from './base';
import { Location } from '../entity/location';

class MonumentController extends BaseController<Monument> {
  constructor(connection: Connection) {
    super(Monument, connection);
  }

  public async getPublicFigures(monumentId: number): Promise<PublicFigure[]> {
    const monumentPublicFigures = await this.repository
      .createQueryBuilder('monument')
      .leftJoinAndSelect('monument.publicFigures', 'publicFigures')
      .where('monument.id = :monumentId', { monumentId })
      .getOne();

    return monumentPublicFigures.publicFigures;
  }

  public async getLocation(monumentId: number): Promise<Location> {
    const monumentLocation = await this.repository
      .createQueryBuilder('monument')
      .leftJoinAndSelect('monument.location', 'location')
      .where('monument.id = :monumentId', { monumentId })
      .getOne();

    return monumentLocation.location;
  }
}

export default MonumentController;