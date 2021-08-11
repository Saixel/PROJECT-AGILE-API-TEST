import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import Role from '../models/role.model'
import config from '../config'

export const signUp = async (req, res) => {
  const {email, password, roles} = req.body

  const newUser = new User({
    email,
    password: await User.encryptPassword(password)
  })

  if (roles) {
    const foundRoles = await Role.find({name: {$in: roles}})
    newUser.roles = foundRoles.map(role => role._id)
  } else {
    const role = await Role.findOne({name: 'user'})
    newUser.roles = [role._id]
  }

  const savedUser = await newUser.save()

  const token = jwt.sign({id: savedUser._id}, config.SECRET, {
    expiresIn: 86400
  })

  res.status(200).json({token})
}

export const signIn = async (req, res) => {
  res.json('signIn')
}