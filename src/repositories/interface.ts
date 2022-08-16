export type Filters = { [key: string]: any }
export type GetManyOptions = {
    limit: number
    skip: number
}
export type GetManyResult<Entity> = {
    total: number
    results: Entity[]
}

export interface CRUDMethods<Entity> {
  getMany(filters: Filters, options: GetManyOptions): Promise<GetManyResult<Entity>>
  getOneById(id: string): Promise<Entity | null>
  create(entityData: Entity): Promise<Entity>
  updateById(id: string, entity: Entity): Promise<void>
  partiallyUpdateById(id: string, partialEntityData: Partial<Entity>): Promise<void>
  deleteById(id: string): Promise<void>
}