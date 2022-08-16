import { Entity, Column, CreateDateColumn, OneToMany } from "typeorm"
import { v4 as uuid } from "uuid"

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

  @Column({ type: "varchar", nullable: true })
  description?: string

  @OneToMany(() => ProductModel, (product) => product.category, { eager: true, nullable: true })
  products?: ProductModel[]

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}