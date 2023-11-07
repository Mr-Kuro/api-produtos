import { TControllerCreate } from "./ControlerType";
import { TProduct } from "./ProductType";

export type TServiceCreate = {
  execute: (data: TProduct) => Promise<TProduct>;
}

export type TServiceUpdate = {
  execute: (data: TProduct, id: number) => Promise<TProduct>;
}

export type TServiceFindById = {
  execute: (id: number) => Promise<TProduct>;
}

export type TServiceFindAll = {
  execute: () => Promise<TProduct[]>;
}

export type TServiceDelete = {
  execute: (id: number) => Promise<TProduct>;
}

