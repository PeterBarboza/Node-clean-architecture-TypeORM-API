import { Factory } from "./factory"

import { log } from "../server"

import { Database } from "../repositories/typeorm/database"
import { ProductsRepository } from "../repositories/products"
import { ProductsService } from "../domain/services/products"
import { ProductsController } from "../controllers/products"

export class ProductsControllerFactory extends Factory {
  create() {
    const database = new Database()
    const productsRepository = new ProductsRepository({ database })
    const productsService = new ProductsService({ productsRepository })

    return new ProductsController({ productsService })
  }
}