import { Schema, model } from 'mongoose'

const customerSchema = new Schema(
  {
    name: String,
    surname: String,
    photoUrl: String,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('Customer', customerSchema)
