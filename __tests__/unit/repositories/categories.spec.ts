import { DataSource } from "typeorm"
import { CategoriesRepository } from "../../../src/repositories/categories"

describe("Should execute all the class methods", () => {
  const mockFindAndCount = jest.fn(() => [10, 10])
  const mockFindOne = jest.fn()
  const mockCreate = jest.fn()
  const mockSave = jest.fn()
  const mockUpdate = jest.fn()
  const mockDelete = jest.fn()

  const mockGetRepository = jest.fn(() => {
    return {
      findAndCount: mockFindAndCount,
      findOne: mockFindOne,
      create: mockCreate,
      save: mockSave,
      update: mockUpdate,
      delete: mockDelete,
    }
  })

  const mockGetDatabase = jest.fn(() => {
    return {
      getRepository: mockGetRepository,
    } as unknown as Promise<DataSource>
  })

  const database = {
    getDatabase: mockGetDatabase,
  }

  const repository = new CategoriesRepository({ database })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Should run Get many", async () => {
    await repository.getMany({} as any, {})

    expect(mockGetDatabase).toBeCalledTimes(1)
    expect(mockGetRepository).toBeCalledTimes(1)
    expect(mockFindAndCount).toBeCalledTimes(1)
  })

  it("Should run Get one", async () => {
    await repository.getOneById("example_id")

    expect(mockGetDatabase).toBeCalledTimes(1)
    expect(mockGetRepository).toBeCalledTimes(1)
    expect(mockFindOne).toBeCalledTimes(1)
  })

  it("Should run Create", async () => {
    await repository.create({} as any)

    expect(mockGetDatabase).toBeCalledTimes(1)
    expect(mockGetRepository).toBeCalledTimes(1)
    expect(mockCreate).toBeCalledTimes(1)
  })

  it("Should run Update", async () => {
    await repository.updateById("", {} as any)

    expect(mockGetDatabase).toBeCalledTimes(1)
    expect(mockGetRepository).toBeCalledTimes(1)
    expect(mockUpdate).toBeCalledTimes(1)
  })

  it("Should run Partial Update", async () => {
    await repository.partiallyUpdateById("", {} as any)

    expect(mockGetDatabase).toBeCalledTimes(1)
    expect(mockGetRepository).toBeCalledTimes(1)
    expect(mockUpdate).toBeCalledTimes(1)
  })

  it("Should run Delete", async () => {
    await repository.deleteById("")

    expect(mockGetDatabase).toBeCalledTimes(1)
    expect(mockGetRepository).toBeCalledTimes(1)
    expect(mockDelete).toBeCalledTimes(1)
  })
})
