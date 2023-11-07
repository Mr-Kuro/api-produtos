import { Db, tabelaProdutos } from "../repository/db/db";
import {TProduct } from "../types/ProductType";
import { TServiceDelete } from "../types/ServiceType";

export class DeleteProductByIdService implements TServiceDelete {
  async execute(id: number): Promise<TProduct> {

    console.log(`Deletando o produto com id ${id}`);

    const product = await Db.delete(id, tabelaProdutos);

    if (!product) {
      throw new Error("Não foi possível deletar o produto");
    }

    return product;
  }
}
