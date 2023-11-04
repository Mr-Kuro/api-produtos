import { Db, tabelaProdutos } from "../db/db";

export class DeleteProductByIdService {
  static async execute(id: number) {

    console.log(`Deletando o produto com id ${id}`);

    const product = await Db.delete(id, tabelaProdutos);

    return product;
  }
}
