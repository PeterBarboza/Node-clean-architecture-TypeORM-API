import express from "express"
import debug from "debug"
import { CONFIG } from "./configs"
import { router } from "./routes"

const app = express()
export const log = debug("api:main")

app.use(express.json())
app.use(router)

app.listen(CONFIG.PORT, () => log(`Server is running on port: [${CONFIG.PORT}]`))
