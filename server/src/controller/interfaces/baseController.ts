import { IFindOptions } from './findOptions';

export interface IBaseController<T> {
  getAll(findOptions?: IFindOptions): Promise<T[]>;
  getById(id: number): Promise<T>;
  create(entity: T): Promise<T>;
}