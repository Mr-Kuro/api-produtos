import { NextFunction, Request, Response } from "express";
import { CreateProductService,  } from "../service/index";
import { ProductRequest } from "../types/ProductType";
import { validationProductData } from "../validation/validations";

export class CreateProductController {
  async handle(request: Request, response: Response, next: NextFunction) {
    
    const requestBody: ProductRequest = request.body;

    const { nome, descricao, preco, estoque } = request.body;

    const isValid = validationProductData(requestBody);
    if (isValid instanceof Error) {
      next(isValid);
    } else {
      const product = await CreateProductService.execute({
        nome,
        descricao,
        preco,
        estoque,
      });

      return response.json(product);
    }
  }
}
