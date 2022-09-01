import { v4 as uuid } from "uuid"

import { Product } from "../entities/Product"

type filter = { [key: string]: string }
type GetManyOptions = {
  limit: number
  skip: number
}
type GetManyResult<Entity> = {
  total: number
  results: Entity[]
}

export class ProductsService {
  productsRepository: any
  constructor({ productsRepository }: any) {
    this.productsRepository = productsRepository
  }

  getMany(options: GetManyOptions, filters: filter[],): Promise<GetManyResult<Product>> {
    return this.productsRepository.getMany(options, filters)
  }
  getOneById(id: string): Promise<Product> {
    return this.productsRepository.getOneById(id)
  }
  create(entityData: Product): Promise<Product> {
    const entity: Product = {
      id: uuid(),
      ...entityData
    }

    return this.productsRepository.create(entity)
  }
  updateById(id: string, entity: Product): Promise<void> {
    return this.productsRepository.updateById(id, entity)
  }
  partiallyUpdateById(id: string, partialEntityData: Partial<Product>): Promise<void> {
    return this.productsRepository.partiallyUpdateById(id, partialEntityData)
  }
  deleteById(id: string): Promise<void> {
    return this.productsRepository.deleteById(id)
  }
}