import { Router } from "express"

import { productsRouter } from "./products"
import { categoriesRouter } from "./categories"

export const router = Router()

router.use("/products", productsRouter)
router.use("/categories", categoriesRouter)