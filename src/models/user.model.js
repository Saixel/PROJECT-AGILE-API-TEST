import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Theres already a user with this email'],
    },
    password: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: [true, 'Password is required'],
      select: false,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
    name: {
      type: String,
      minlength: 2,
      maxlength: 15,
    },
    surname: {
      type: String,
      minlength: 2,
      maxlength: 15,
    },
    phone: {
      type: String,
      minlength: 5,
      maxlength: 15,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

userSchema.plugin(mongoosePaginate)

export default model('User', userSchema)
