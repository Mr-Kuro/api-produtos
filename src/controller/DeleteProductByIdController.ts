import { NextFunction, Request, Response } from "express";
import { DeleteProductByIdService } from "../service/index";
import { validationProductId } from "../validation/validations";

export class DeleteProductByIdController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const isValid = await validationProductId(Number(id));
    if (isValid instanceof Error) {
      next(isValid);
    }

    const product = await DeleteProductByIdService.execute(Number(id));

    return response.json(product);
  }
}
