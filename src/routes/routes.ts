import {Router} from "express";
import {CreateProductController, UpdateProductController, GetAllProductController, GetProductByIdController, DeleteProductByIdController} from "../controller/index";

export const router = Router();

router.post("/api/produto", new CreateProductController().handle);
router.put("/api/produto/:id", new UpdateProductController().handle);
router.get("/api/produto", new GetAllProductController().handle);
router.get("/api/produto/:id", new GetProductByIdController().handle);
router.delete("/api/produto/:id", new DeleteProductByIdController().handle);