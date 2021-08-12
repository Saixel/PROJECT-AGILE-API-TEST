import User from '../models/user.model'
import Role from '../models/role.model'

import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
  try {
    const { email, password, roles } = req.body

    const newUser = new User({
      email,
      password: await User.encryptPassword(password),
    })

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } })
      newUser.roles = foundRoles.map((role) => role._id)
    } else {
      const role = await Role.findOne({ name: 'user' })
      newUser.roles = [role._id]
    }

    const savedUser = await newUser.save()

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400,
    })

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      'email password roles'
    )
    if (!user) return res.status(400).json({ message: 'User not found' })

    const matchPassword = await User.comparePassword(
      req.body.password,
      user.password
    )
    if (!matchPassword)
      return res.status(401).json({ message: 'Invalid password' })

    const token = jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: 86400,
    })

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json(error)
  }
}
