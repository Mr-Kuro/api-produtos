import { Db, tabelaProdutos } from "../repository/db/db";
import { TProduct } from "../types/ProductType";
import { TServiceFindAll } from "../types/ServiceType";

export class GetAllProductService implements TServiceFindAll {
  async execute(): Promise<TProduct[]> {
    console.log(`Resgatando todos os produtos`);

    const products = await Db.find(tabelaProdutos);

    if (!products) {
      throw new Error("Não foi possível resgatar os produtos");
    }

    return products;
  }
}
