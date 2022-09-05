import { validate } from "uuid"

import { CategoriesService } from "../../../../src/domain/services/categories"

describe("Should execute all the class methods", () => {
  const mockGetMany = jest.fn()
  const mockGetOneById = jest.fn()
  const mockCreate = jest.fn((entity: any) => entity)
  const mockUpdateById = jest.fn()
  const mockDeleteById = jest.fn()

  const categoriesRepository = {
    getMany: mockGetMany,
    getOneById: mockGetOneById,
    create: mockCreate,
    updateById: mockUpdateById,
    deleteById: mockDeleteById,
  }

  const service = new CategoriesService({
    categoriesRepository,
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Should run Get many", async () => {
    await service.getMany({} as any, [])

    expect(mockGetMany).toBeCalledTimes(1)
  })

  it("Should run Get one", async () => {
    await service.getOneById("")

    expect(mockGetOneById).toBeCalledTimes(1)
  })

  it("Should run Create and generate a valid UUID", async () => {
    const entity = await service.create({} as any)

    const isUUID = validate(entity.id!)

    expect(mockCreate).toBeCalledTimes(1)
    expect(isUUID).toBeTruthy()
  })

  it("Should run Update One", async () => {
    await service.updateById("", {} as any)

    expect(mockUpdateById).toBeCalledTimes(1)
  })

  it("Should run Delete One", async () => {
    await service.deleteById("")

    expect(mockDeleteById).toBeCalledTimes(1)
  })
})
