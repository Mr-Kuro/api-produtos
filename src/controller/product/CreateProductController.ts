import {Request, Response} from "express";
import {CreateProductService} from "../../service/CreateProductService";

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const {nome, descricao, preco, estoque} = request.body;

        const product = await CreateProductService.execute({nome, descricao, preco, estoque});

        return response.json(product);
    }
}