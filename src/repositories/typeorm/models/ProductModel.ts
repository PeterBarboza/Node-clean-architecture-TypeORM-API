import { Entity, Column, CreateDateColumn, ManyToOne } from "typeorm"

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

  @ManyToOne(
    () => CategoryModel,
    (category) => category.products,
    {
      eager: true,
      nullable: false,
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
    }
  )
  category!: CategoryModel
}