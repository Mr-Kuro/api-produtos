import { Db, tabelaProdutos } from "../repository/db/db";
import { TProduct } from "../types/ProductType";
import { TServiceUpdate } from "../types/ServiceType";

export class UpdateProductService implements TServiceUpdate{
  async execute(produto: TProduct, id: number): Promise<TProduct>{
    console.log(
      `Atualizando produto com id ${produto.id} para:\n nome: ${produto.nome}, descricao ${produto.descricao}: , preco: ${produto.preco}, estoque: ${produto.estoque}`
    );

    const product = Db.update(
      id, produto,
      tabelaProdutos
    );

    if (!product) {
      throw new Error("Não foi possível atualizar o produto");
    }

    return product;
  }
}
