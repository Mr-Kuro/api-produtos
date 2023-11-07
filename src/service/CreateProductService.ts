import { Db, tabelaProdutos } from "../repository/db/db";
import { TProduct } from "../types/ProductType";
import { TServiceCreate } from "../types/ServiceType";

export class CreateProductService implements TServiceCreate{
  async execute(product: TProduct): Promise<TProduct> {
    const { nome, descricao, preco, estoque } = product;

    console.log(
      `Criando produto nome: ${nome}, descricao ${descricao}: , preco: ${preco}, estoque: ${estoque}`
    );

    const createdProduct = await Db.create(
      { nome, descricao, preco, estoque },
      tabelaProdutos
    );

    if (!createdProduct) {
      throw new Error("Não foi possível criar o produto");
    }

    return createdProduct;
  }
}