import { TProduct } from "./ProductType";

export type TRepository = {
  database: object;
  create(data: TProduct): TProduct;
  update(data: TProduct): TProduct;
  delete(id: number): TProduct;
  find(): Promise<TProduct[]>;
  findById(id: number): TProduct;
}