import { Request, Response } from "express"

import { log } from "../server"

import { GetManyResponse, RestMethods } from "./interface"

export class CategoriesController implements RestMethods {
  categoriesService:any
  constructor({ categoriesService }: any) {
    this.categoriesService = categoriesService
  }

  async getMany(req: Request, res: Response): Promise<any> {
    const { limit, skip, ...filters} = req.query

    try {
      const { total, results } = await this.categoriesService.getMany({ limit, skip }, filters)
  
      return res.status(200).json({ 
        pagination: { 
          limit: limit as unknown as number,
          skip: skip as unknown as number,
          total
        },
        results
      } as GetManyResponse)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Categories" })
    }
  }

  async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params

    try {
      const result = await this.categoriesService.getOneById(id)
  
      if(!result) return res.sendStatus(404)
  
      return res.status(200).json(result)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Categories" })
    }
  }

  async create(req: Request, res: Response): Promise<any> {
    const result = await this.categoriesService.create(req.body)

    try {
      return res.status(200).json(result)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Categories" })
    }
  }

  async updateById(req: Request, res: Response): Promise<any> {
    const { id } = req.params

    try {
      await this.categoriesService.updateById(id, req.body)
  
      return res.sendStatus(200)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Categories" })
    }
  }

  async partiallyUpdateById(req: Request, res: Response): Promise<any> {
    const { id } = req.params

    try {
      await this.categoriesService.partiallyUpdateById(id, req.body)
  
      return res.sendStatus(200)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Categories" })
    }
  }
  
  async deleteById(req: Request, res: Response): Promise<any> {
    const { id } = req.params

    try {
      await this.categoriesService.deleteById(id)

      return res.sendStatus(200)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Categories" })
    }
  }
}