import "reflect-metadata"
import { DataSource } from "typeorm"

import { CONFIG } from "../../configs"

export const AppDataSource = new DataSource(CONFIG.DB)
