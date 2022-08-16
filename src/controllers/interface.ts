import { Request, Response } from "express"
export interface RestMethods {
  getMany(req: Request, res: Response): Promise<any>
  getOne(req: Request, res: Response): Promise<any>
  create(req: Request, res: Response): Promise<any>
  updateById(req: Request, res: Response): Promise<any>
  partiallyUpdateById(req: Request, res: Response): Promise<any>
  deleteById(req: Request, res: Response): Promise<any>
}

export interface PaginationResponse {
  total: number
  limit: number
  skip: number
}

export interface GetManyResponse<Entity = any> {
  pagination: PaginationResponse
  results: Entity[]
}
