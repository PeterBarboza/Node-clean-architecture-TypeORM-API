import { Router } from "express"

import { ProductsControllerFactory } from "../factories/productsControllerFactory"
import { paginationMiddleware } from "../middlewares/paginationMiddleware"

export const productsRouter = Router()

const productsController = new ProductsControllerFactory().create()

productsRouter.get("/", paginationMiddleware, (req, res) => {
  return productsController.getMany(req, res)
})
productsRouter.get("/:id", (req, res) => {
  return productsController.getOne(req, res)
})
productsRouter.post("/", (req, res) => {
  return productsController.create(req, res)
})
productsRouter.put("/:id", (req, res) => {
  return productsController.updateById(req, res)
})
productsRouter.patch("/:id", (req, res) => {
  return productsController.partiallyUpdateById(req, res)
})
productsRouter.delete("/:id", (req, res) => {
  return productsController.deleteById(req, res)
})