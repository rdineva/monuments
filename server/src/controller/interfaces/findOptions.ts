export type Order = 'ASC' | 'DESC';

export interface IFindOptions {
  limit?: number;
  offset?: number;
  orderColumn?: string;
  order?: Order;
}