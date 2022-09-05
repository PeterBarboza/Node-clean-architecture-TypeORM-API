import "dotenv/config"

import { typeormConfig } from "./typeorm"

export const CONFIG = {
  PORT: process.env.PORT,
  DB: typeormConfig,
}