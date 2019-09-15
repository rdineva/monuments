import {
  Connection, Repository, DeleteResult, UpdateResult,
} from 'typeorm';
import { IBaseController } from './interfaces/baseController';
import { IFindOptions } from './interfaces/findOptions';

class BaseController<T> implements IBaseController<T> {
  protected repository: Repository<T>;

  constructor(EntityType: { new(): T }, connection: Connection) {
    this.repository = connection.getRepository(EntityType);
  }

  public getAll({
	  limit, offset, orderColumn, order,
  }: IFindOptions): Promise<T[]> {
	  return this.repository
	    .createQueryBuilder('entity')
		  .orderBy(orderColumn, order)
		  .offset(offset)
		  .limit(limit)
		  .getMany();
  }

  public getById(id: number): Promise<T> {
	  return this.repository.findOne(id);
  }

  public deleteById(id: number): Promise<DeleteResult> {
	  return this.repository.delete(id);
  }

  public async create(entity: T): Promise<T> {
	  const entityObj = await this.repository.create(entity);
	  return this.repository.save(entityObj);
  }

  public update(id: number, entity: T): Promise<UpdateResult> {
	  return this.repository.update(id, entity);
  }
}

export default BaseController;