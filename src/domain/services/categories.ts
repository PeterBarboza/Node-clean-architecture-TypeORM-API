import { Category } from "../entities/Category"

type filter = { [key: string]: string }
type GetManyOptions = {
    limit: number
    skip: number
}
type GetManyResult<Entity> = {
    total: number
    results: Entity[]
}

export class CategoriesService {
  categoriesRepository: any
  constructor({ categoriesRepository }: any) {
    this.categoriesRepository = categoriesRepository
  }

  getMany(options: GetManyOptions, filters: filter[]): Promise<GetManyResult<Category>> {
    return this.categoriesRepository.getMany(options, filters)
  }
  getOneById(id: string): Promise<Category> {
    return this.categoriesRepository.getOneById(id)
  }
  create(entityData: Category): Promise<Category> {
    return this.categoriesRepository.create(entityData)
  }
  updateById(id: string, entity: Category): Promise<void> {
    return this.categoriesRepository.updateById(id, entity)
  }
  partiallyUpdateById(id: string, partialEntityData: Partial<Category>): Promise<void> {
    return this.categoriesRepository.partiallyUpdateById(id, partialEntityData)
  }
  deleteById(id: string): Promise<void> {
    return this.categoriesRepository.deleteById(id)
  }
}