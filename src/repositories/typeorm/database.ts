import { DataSource } from "typeorm"
import { log } from "../../server"

import { AppDataSource } from "./data-source"

export class Database {
  async getDatabase(): Promise<DataSource> {
    if(!AppDataSource.isInitialized) {
      const database = await AppDataSource.initialize()

      log("Connected to database")

      return database
    }

    return AppDataSource
  }
}