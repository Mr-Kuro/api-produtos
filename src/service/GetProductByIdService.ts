import { Db, tabelaProdutos } from "../db/db";

export class GetProductByIdService {
  static async execute(id: number) {
    console.log(`Resgatando o produto com id ${id}`);

    const product = await Db.findById(id, tabelaProdutos);

    return product;
  }
}
