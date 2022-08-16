import { Database } from "./typeorm/database"

export type TypeORMBaseRepositoryConstrtuctor = {
  database: Database
}

export class TypeORMBaseRepository {
  database: Database
  constructor({ database }: TypeORMBaseRepositoryConstrtuctor) {
    this.database = database
  }
}