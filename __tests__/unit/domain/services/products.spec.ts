import { validate } from "uuid"

import { ProductsService } from "../../../../src/domain/services/products"

describe("Should execute all the class methods", () => {
  const mockGetMany = jest.fn()
  const mockGetOneById = jest.fn()
  const mockCreate = jest.fn((entity: any) => entity)
  const mockUpdateById = jest.fn()
  const mockDeleteById = jest.fn()

  const productsRepository = {
    getMany: mockGetMany,
    getOneById: mockGetOneById,
    create: mockCreate,
    updateById: mockUpdateById,
    deleteById: mockDeleteById,
  }

  const service = new ProductsService({
    productsRepository,
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
