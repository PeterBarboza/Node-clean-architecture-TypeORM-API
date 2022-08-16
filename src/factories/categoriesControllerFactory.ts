import { Factory } from "./factory"

import { Database } from "../repositories/typeorm/database"
import { CategoriesRepository } from "../repositories/categories"
import { CategoriesService } from "../domain/services/categories"
import { CategoriesController } from "../controllers/categories"

export class CategoriesControllerFactory extends Factory {
  create() {
    const database = new Database()
    const categoriesRepository = new CategoriesRepository({ database })
    const categoriesService = new CategoriesService({ categoriesRepository })
  
    return new CategoriesController({ categoriesService })  
  }
}