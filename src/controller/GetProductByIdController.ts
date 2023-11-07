import { NextFunction, Request, Response } from "express";
import { GetProductByIdService } from "../service/index";
import { validationProductId } from "../validation/validations";

export class GetProductByIdController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const isValid = await validationProductId(Number(id));
    if (isValid instanceof Error) {
      next(isValid);
    }

    const product = await GetProductByIdService.execute(Number(id));

    return response.json(product);
  }
}
