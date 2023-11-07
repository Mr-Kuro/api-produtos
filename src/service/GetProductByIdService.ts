import { Db, tabelaProdutos } from "../repository/db/db";
import { TProduct } from "../types/ProductType";
import { TServiceFindById } from "../types/ServiceType";

export class GetProductByIdService implements TServiceFindById {
  async execute(id: number) : Promise<TProduct> {
    console.log(`Resgatando o produto com id ${id}`);

    const product = await Db.findById(id, tabelaProdutos);

    if (!product) {
      throw new Error("Não foi possível resgatar o produto");
    }

    return product;
  }
}
