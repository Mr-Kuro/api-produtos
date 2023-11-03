import { ProductRequest } from "../interfaces/ProductInterface";

export function validationProductData(requestBody: ProductRequest) {
  if (
    typeof requestBody.nome !== "string" ||
    typeof requestBody.descricao !== "string" ||
    typeof requestBody.preco !== "number" ||
    typeof requestBody.estoque !== "number"
  ) {
    const error: any = new Error("Dados Invalidos");
    error.status = 400;
    console.error(error.message);
    return error;
  }
}