import { NextFunction, Request, Response } from "express";
import { GetAllProductService } from "../service/index";

export class GetAllProductController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const products = await GetAllProductService.execute();

    return response.json(products);
  }
}
