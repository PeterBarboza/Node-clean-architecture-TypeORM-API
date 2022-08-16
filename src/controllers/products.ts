import { Request, Response } from "express"

import { log } from "../server"

import { GetManyResponse, RestMethods } from "./interface"

export class ProductsController implements RestMethods {
  productsService:any
  constructor({ productsService }: any) {
    this.productsService = productsService
  }

  async getMany(req: Request, res: Response): Promise<any> {
    const { limit, skip, ...filters} = req.query

    try {
      const { total, results } = await this.productsService.getMany({ limit, skip }, filters)
  
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
      return res.status(400).json({ message: "Error on Products" })
    }
  }

  async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params

    try {
      const result = await this.productsService.getOneById(id)
  
      if(!result) return res.sendStatus(404)
  
      return res.status(200).json(result)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Products" })
    }
  }

  async create(req: Request, res: Response): Promise<any> {
    
    try {
      const result = await this.productsService.create(req.body)
      
      return res.status(200).json(result)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Products" })
    }
  }

  async updateById(req: Request, res: Response): Promise<any> {
    const { id } = req.params

    try {
      await this.productsService.updateById(id, req.body)
  
      return res.sendStatus(200)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Products" })
    }
  }

  async partiallyUpdateById(req: Request, res: Response): Promise<any> {
    const { id } = req.params

    try {
      await this.productsService.partiallyUpdateById(id, req.body)
  
      return res.sendStatus(200)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Products" })
    }
  }
  
  async deleteById(req: Request, res: Response): Promise<any> {
    const { id } = req.params

    try {
      await this.productsService.deleteById(id)

      return res.sendStatus(200)
    } catch (error) {
      log(error)
      return res.status(400).json({ message: "Error on Products" })
    }
  }
}