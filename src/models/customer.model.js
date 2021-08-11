import {Schema, model} from 'mongoose'

const customerSchema = new Schema({
  name: String,
  surname: String,
  photoUrl: String,
  // createdBy:
  // updatedBy:
}, {
  timestamps: true,
  versionKey: false
})

export default model('Customer', customerSchema)