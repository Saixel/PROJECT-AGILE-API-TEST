import User from '../models/user.model'
import { ROLES } from '../models/role.model'

export const checkDuplicateEmail = async (req, res, next) => {
  const user = await User.findOne({email: req.body.email})
  if (user) return res.status(400).json({message: 'The user already exists'})

  next ()
}

export const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res
          .status(400)
          .json({ message: `Role ${req.body.roles[i]} does not exists` })
      }
    }
  }

  next()
}
