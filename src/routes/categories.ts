import { Router } from "express"

import { CategoriesControllerFactory } from "../factories/categoriesControllerFactory"
import { paginationMiddleware } from "../middlewares/paginationMiddleware"

export const categoriesRouter = Router()

const categoriesController = new CategoriesControllerFactory().create()

categoriesRouter.get("/", paginationMiddleware, (req, res) => {
  return categoriesController.getMany(req, res)
})
categoriesRouter.get("/:id", (req, res) => {
  return categoriesController.getOne(req, res)
})
categoriesRouter.post("/", (req, res) => {
  return categoriesController.create(req, res)
})
categoriesRouter.put("/:id", (req, res) => {
  return categoriesController.updateById(req, res)
})
categoriesRouter.patch("/:id", (req, res) => {
  return categoriesController.partiallyUpdateById(req, res)
})
categoriesRouter.delete("/:id", (req, res) => {
  return categoriesController.deleteById(req, res)
})