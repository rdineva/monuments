import { Connection } from 'typeorm';
import { PublicFigure } from '../entity/publicFigure';
import BaseController from './base';
import { WikiInfo } from '../entity/wikiInfo';

class PublicFigureController extends BaseController<PublicFigure> {
  constructor(connection: Connection) {
    super(PublicFigure, connection);
  }

  public async getWikiInfo(publicFigureId: number): Promise<WikiInfo> {
    const publicFigureWikiInfo = await this.repository
      .createQueryBuilder('publicFigure')
      .leftJoinAndSelect('publicFigure.wikiInfo', 'wikiInfo')
      .where('publicFigure.id = :publicFigureId', { publicFigureId })
      .getOne();

    return publicFigureWikiInfo.wikiInfo;
  }
}

export default PublicFigureController;