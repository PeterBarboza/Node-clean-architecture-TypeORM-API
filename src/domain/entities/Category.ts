import { Product } from "./Product"

export class Category {
  id?: string
  createdAt?: Date
  name!: string
  description?: string
  products?: Product[]
}