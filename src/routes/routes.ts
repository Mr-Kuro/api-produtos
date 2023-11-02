import {Router} from "express";
import {CreateProductController} from "../controller/product/CreateProductController";

export const router = Router();

router.post("/api/produto", new CreateProductController().handle);