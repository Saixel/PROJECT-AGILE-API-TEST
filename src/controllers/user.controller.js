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

export const getUsers = async (req, res) => {
  try {
    const { page, perPage } = req.query
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 10,
    }
    const users = await User.paginate({}, options)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findById(userId).populate('roles')
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      req.body,
      { new: true }
    )
    const userSaved = await updatedUser.save()
    res.status(200).json(userSaved)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateUserRole = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findById(userId)
    const userRole = await Role.findOne({ name: 'user' })
    const adminRole = await Role.findOne({ name: 'admin' })

    if (user.roles.includes(userRole._id)) user.roles = [adminRole._id]
    else user.roles = [userRole._id]

    const userSaved = await user.save()
    res.status(200).json(userSaved)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params
    await User.findByIdAndDelete(userId)
    res.status(200).json({ message: 'User successfully deleted' })
  } catch (error) {
    res.status(500).json(error)
  }
}