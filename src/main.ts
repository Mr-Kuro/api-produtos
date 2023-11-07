import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes/routes";

const { API_PORT, API_HOST } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use((error: any, request: Request, response: Response, next: NextFunction) => {
  response.status(error.status || 500);
  response.json({ error: error.message });
});

app.listen(API_PORT, () => {
  console.log(`Server started ${API_HOST}:${API_PORT}`);
});
