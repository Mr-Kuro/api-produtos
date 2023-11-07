import { NextFunction, Request, Response } from "express";
import { UpdateProductService } from "../service/index";
import { ProductRequest } from "../types/ProductType";
import { validationProductUpdate } from "../validation/validations";

export class UpdateProductController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const requestBody: ProductRequest = request.body;
    const { nome, descricao, preco, estoque } = request.body;

    const isValid = await validationProductUpdate(requestBody, Number(id));
    if (isValid instanceof Error) {
      next(isValid);
    } else {
      const product = await UpdateProductService.execute(
        { nome, descricao, preco, estoque },
        Number(id)
      );

      return response.json(product);
    }
  }
}
