import { Schema, model } from 'mongoose'

export const ROLES = ['user', 'admin']

const roleSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 10,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

export default model('Role', roleSchema)
