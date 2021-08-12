import { config } from 'dotenv'
config()

export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/agile-test',
  PORT: process.env.PORT || 3000,
  SECRET: 'customers-api-secret',
}
