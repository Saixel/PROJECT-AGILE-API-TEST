import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

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

customerSchema.plugin(mongoosePaginate)

export default model('Customer', customerSchema)
