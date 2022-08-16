import { Category } from "./Category"

export class Product {
  id?: string
  createdAt?: Date
  name!: string
  price!: number
  category!: Category
}