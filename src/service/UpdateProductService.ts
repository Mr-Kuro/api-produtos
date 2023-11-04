import { Db, tabelaProdutos } from "../db/db";
import { ProductRequest } from "../interfaces/ProductInterface";

export class UpdateProductService {
  static async execute(
    { nome, descricao, preco, estoque }: ProductRequest,
    id: number
  ) {
    console.log(
      `Atualizando produto com id ${id} para:\n nome: ${nome}, descricao ${descricao}: , preco: ${preco}, estoque: ${estoque}`
    );

    const product = Db.update(
      id,
      {
        nome,
        descricao,
        preco,
        estoque,
      },
      tabelaProdutos
    );

    return product;
  }
}
