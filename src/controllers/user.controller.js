import User from '../models/user.model'
import Role from '../models/role.model'

export const createUser = async (req, res) => {
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

    return res.status(200).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
  }
}
