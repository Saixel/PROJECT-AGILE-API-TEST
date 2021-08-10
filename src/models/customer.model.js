import {Schema, model} from 'mongoose'

const customerSchema = new Schema({
  name: String,
  surname: String,
  photoUrl: String,
  // created:
  // author:
  // modified:
}, {
  timestamps: true,
  versionKey: false
})

export default model('Customer', customerSchema)