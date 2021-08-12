import { config } from 'dotenv'
config()

export default {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET || 'your-ultra-secret-here',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost',
  MONGO_DB: process.env.MONGO_DB || 'agile-test',
}
