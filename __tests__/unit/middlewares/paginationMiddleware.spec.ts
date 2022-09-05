import { Request, Response } from "express"
import { paginationMiddleware } from "../../../src/middlewares/paginationMiddleware"

describe("", () => {
  type queryParams = {
    limit?: number | string
    skip?: number | string
  }

  const next = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("Receive numbers and return with the same numbers", () => {
    const req = {
      query: {
        limit: 5,
        skip: 4
      } as queryParams
    }

    paginationMiddleware(req as Request, {} as Response, next)
    console.log(req.query)

    expect(req.query.limit).toBe(req.query.limit)
    expect(req.query.skip).toBe(req.query.skip)
    expect(next).toBeCalledTimes(1)
  })

  test("Receive string numbers and return with the same numbers", () => {
    const req = {
      query: {
        limit: "8",
        skip: "6"
      } as queryParams
    }

    paginationMiddleware(req as Request, {} as Response, next)
    console.log(req.query)

    expect(req.query.limit == 8).toBeTruthy()
    expect(req.query.skip == 6).toBeTruthy()
    expect(next).toBeCalledTimes(1)
  })

  test("Receive undefined values and return with the default numbers", () => {
    const req = {
      query: {} as queryParams
    }

    paginationMiddleware(req as Request, {} as Response, next)
    console.log(req.query)

    expect(req.query.limit == 10).toBeTruthy()
    expect(req.query.skip == 0).toBeTruthy()
    expect(next).toBeCalledTimes(1)
  })

  test("Receive invalid values and return with the default numbers", () => {
    const req = {
      query: {
        limit: "test-string@555",
        skip: [1, 2, 3] as any
      } as queryParams
    }

    paginationMiddleware(req as Request, {} as Response, next)
    console.log(req.query)

    expect(req.query.limit == 10).toBeTruthy()
    expect(req.query.skip == 0).toBeTruthy()
    expect(next).toBeCalledTimes(1)
  })
})
