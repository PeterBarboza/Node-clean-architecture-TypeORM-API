import omit from "lodash/omit"

import { Product } from "../domain/entities/Product";
import { TypeORMBaseRepository } from "./typeorm";
import { ProductModel } from "./typeorm/models/ProductModel"

import { CRUDMethods, Filters, GetManyOptions } from "./interface"

export class ProductsRepository 
  extends TypeORMBaseRepository 
  implements CRUDMethods<Product>
{
  async getMany(
    { skip, limit }: GetManyOptions,
    filters: Filters
    ) {
    const database = await this.database.getDatabase()
    const [results, total] = await database.getRepository(ProductModel).findAndCount({
      where: filters || {},
      skip: skip,
      take: limit
    })

    return {
      total,
      results
    }
  }

  async getOneById(id: string) {
    const database = await this.database.getDatabase()

    return await database.getRepository(ProductModel).findOne({
      where: {
        id: id
      }
    })
  }

  async create(entityData: Product) {
    const database = await this.database.getDatabase()

    const repository = database.getRepository(ProductModel)
    const entity = repository.create(entityData)

    return await repository.save(entity)
  }

  async updateById(
    id: string,
    entity: Product
    ): Promise<void> {
    const database = await this.database.getDatabase()
    await database.getRepository(ProductModel).
      update(id, omit(entity, "id"))

    return 
  }

  async partiallyUpdateById(
    id: string, 
    partialEntity: Partial<Product>
    ): Promise<void> {
    const database = await this.database.getDatabase()
    await database.getRepository(ProductModel).
      update(id, omit(partialEntity, "id"))

    return 
  }

  async deleteById(id: string): Promise<void> {
    const database = await this.database.getDatabase()
    await database.getRepository(ProductModel).
      delete(id)

    return 
  }
}