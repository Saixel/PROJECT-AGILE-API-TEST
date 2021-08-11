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
  const userFound = await User.findOne({email: req.body.email}).populate('roles')
  if (!userFound) return res.status(400).json({message: 'User not found'})
  const matchPassword = await User.comparePassword(req.body.password, userFound.password)
  if(!matchPassword) return res.status(401).json({ message: 'Invalid password' })

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  })

  res.status(200).json({token})
}