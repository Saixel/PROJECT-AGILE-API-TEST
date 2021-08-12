import mongoose from 'mongoose'
import config from './config'

mongoose
  .connect(config.MONGO_URL, {
    dbName: config.MONGO_DB,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.info('💾 Connected to Mongo Database \n'))
  .catch((err) => console.error(err))
