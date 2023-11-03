import {Db} from "../db/db";
import {ProductRequest} from "../interfaces/ProductInterface";

export class CreateProductService {
    static async execute ({nome , descricao, preco, estoque}: ProductRequest) {
        console.log(`Criando produto nome: ${nome}, descricao ${descricao}: , preco: ${preco}, estoque: ${estoque}`);

        const product = await Db.create({
            data: {
                nome,
                descricao,
                preco,
                estoque
            }
        }, "tabelaProdutos")

        return product;
    }
}