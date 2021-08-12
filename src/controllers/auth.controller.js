import User from '../models/user.model'
import Role from '../models/role.model'

import jwt from 'jsonwebtoken'
import config from '../config'

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
