import { TProduct } from "./ProductType";
import { Request, Response } from "express";

export type TControllerCreate = {
  handle(req: Request, res: Response): TProduct;
}
