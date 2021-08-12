import User from '../models/user.model'
import { ROLES } from '../models/role.model'

export const checkDuplicateEmail = async (req, res, next) => {
  try {
    const email = await User.findOne({ email: req.body.email })
    if (email) return res.status(400).json({ message: 'Email already in use' })

    next()
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

export const checkValidRoles = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({ message: 'Role does not exists' })
      }
    }
  }

  next()
}
