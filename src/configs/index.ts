import "dotenv/config"

import { typeormConfig } from "./typeorm"

export const CONFIG = {
  PORT: 3000,
  DB: typeormConfig,
}