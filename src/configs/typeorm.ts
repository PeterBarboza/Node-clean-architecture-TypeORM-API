import { DataSourceOptions } from "typeorm"

const modelsRelativePath = "repositories/typeorm/models/*.{ts,js}"
const migrationsRelativePath = "repositories/typeorm/migrations/*.{ts,js}"

export const typeormConfig: DataSourceOptions = {
  type: "mysql",
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    entities: [
        modelsRelativePath,
        `src/${modelsRelativePath}`,
        `dist/${modelsRelativePath}`,
    ],
    migrations: [
        migrationsRelativePath,
        `src/${migrationsRelativePath}`,
        `dist/${migrationsRelativePath}`,
    ],
    ...((process.env.DATABASE_HOST || "").includes("ssl") ? { ssl: {} } : {})
}
