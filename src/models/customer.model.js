import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const customerSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 20,
      required: [true, 'Name is required'],
    },
    surname: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, 'Surname is required'],
    },
    photoUrl: {
      type: String,
      default: 'https://i.ibb.co/86wZYF1/avatardefault-92824.png',
      required: [true, 'Photo url is required'],
    },
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
