import mongoose from 'mongoose'
import config from './config'

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error(err))
