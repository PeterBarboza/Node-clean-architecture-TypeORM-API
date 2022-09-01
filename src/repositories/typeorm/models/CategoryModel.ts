import { Entity, Column, CreateDateColumn, OneToMany } from "typeorm"

import { Category } from "../../../domain/entities/Category"
import { ProductModel } from "./ProductModel"

@Entity("categories")
export class CategoryModel implements Category {
  @Column({ primary: true })
  id?: string

  @CreateDateColumn()
  createdAt?: Date

  @Column({ type: "varchar" })
  name!: string

  @Column({ type: "varchar" })
  description?: string

  @OneToMany(
    () => ProductModel,
    (product) => product.category,
    {
      lazy: true,
      nullable: true,
      cascade: true,
    }
  )
  products?: ProductModel[]
}