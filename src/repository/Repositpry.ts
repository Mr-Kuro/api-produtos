import { TRepository } from "../types/RepositoryType";

class Repository implements TRepository {
  private const database: object;

  constructor(database: object) {
    this.database = database;
  }

  create(data: TProduct): TProduct {
    // TODO
  }

  update(data: TProduct): TProduct {
    // TODO
  }

  delete(id: number): TProduct {
    // TODO
  }

  find(): Promise<TProduct[]> {
    // TODO
  }

  findById(id: number): TProduct {
    // TODO
  }

  private saveDatabase(): void {
    // TODO
  }
}