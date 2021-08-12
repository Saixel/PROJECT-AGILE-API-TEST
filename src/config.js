import { config } from 'dotenv'
config()

export default {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET || 'customers-api-secret',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost',
  MONGO_DB: process.env.MONGO_DB || 'agile-test',
}
