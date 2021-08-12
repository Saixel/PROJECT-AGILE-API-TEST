import jwt from 'jsonwebtoken'
import config from '../config'

import User from '../models/user.model'
import Role from '../models/role.model'

export const verifyToken = async (req, res, next) => {
  const token = req.headers['token']
  if (!token) return res.status(403).json({ message: 'No token provided' })

  try {
    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id

    const user = await User.findById(req.userId).populate('roles')
    if (!user) return res.status(404).json({ message: 'No user found' })
    res.locals.user = user

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

export const isAdmin = async (req, res, next) => {
  try {
    const user = res.locals.user
    const roles = user.roles

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'admin') {
        next()
        return
      }
    }

    return res.status(403).json({ message: 'Require admin role' })
  } catch (error) {
    return res.status(500).send({ message: error })
  }
}
