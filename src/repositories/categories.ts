import omit from "lodash/omit"

import { Category } from "../domain/entities/Category";
import { TypeORMBaseRepository } from "./typeorm";
import { CategoryModel } from "./typeorm/models/CategoryModel"

import { CRUDMethods, Filters, GetManyOptions } from "./interface"

export class CategoriesRepository 
  extends TypeORMBaseRepository 
  implements CRUDMethods<Category>
{
  async getMany(
    { skip, limit }: GetManyOptions,
    filters: Filters
    ) {
    const database = await this.database.getDatabase()
    const [results, total] = await database.getRepository(CategoryModel).findAndCount({
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

    return await database.getRepository(CategoryModel).findOne({
      where: {
        id: id
      }
    })
  }

  async create(entityData: Category) {
    const database = await this.database.getDatabase()
    const repository = database.getRepository(CategoryModel)
    const entity = repository.create(entityData)

    return await repository.save(entity)
  }

  async updateById(
    id: string,
    entity: Category
    ): Promise<void> {
    const database = await this.database.getDatabase()
    await database.getRepository(CategoryModel).
      update(id, omit(entity, "id"))

    return
  }

  async partiallyUpdateById(
    id: string, 
    partialEntity: Partial<Category>
    ): Promise<void> {
    const database = await this.database.getDatabase()
    await database.getRepository(CategoryModel).
      update(id, omit(partialEntity, "id"))

    return
  }

  async deleteById(id: string): Promise<void> {
    const database = await this.database.getDatabase()
    await database.getRepository(CategoryModel).
      delete(id)

    return 
  }
}