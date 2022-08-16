import { Entity, Column, CreateDateColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid"

import { Product } from "../../../domain/entities/Product"
import { CategoryModel } from "./CategoryModel"

@Entity("products")
export class ProductModel implements Product {
  @Column({ primary: true })
  id?: string

  @CreateDateColumn()
  createdAt?: Date

  @Column({ type: "varchar" })
  name!: string

  @Column({ type: "float" })
  price!: number

  @ManyToOne(() => CategoryModel, (category) => category.products, { eager: false, nullable: false })
  category!: CategoryModel

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}