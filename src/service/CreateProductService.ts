import {Db} from "../db/db";

interface ProductRequest {
    nome: string;
    descricao: string;
    preco: number;
    estoque: number;
}

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