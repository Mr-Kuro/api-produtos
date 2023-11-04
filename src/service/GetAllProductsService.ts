import { Db, tabelaProdutos } from "../db/db";

export class GetAllProductService {
  static async execute() {
    console.log(`Resgatando todos os produtos`);

    const products = await Db.find(tabelaProdutos);

    return products;
  }
}
