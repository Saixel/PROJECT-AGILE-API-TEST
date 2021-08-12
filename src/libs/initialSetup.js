import User from '../models/user.model'
import Role from '../models/role.model'

import bcrypt from 'bcryptjs'

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount()

    // Check for existing roles
    if (count > 0) return

    // Create default roles
    const values = await Promise.all([
      new Role({ name: 'user' }).save(),
      new Role({ name: 'admin' }).save(),
    ])

    console.log(values)
  } catch (error) {
    console.error(error)
  }
}

export const createAdmin = async () => {
  try {
    // Check for existing admin
    const user = await User.findOne({ email: 'admin@apitest' })

    // Get admin role id
    const role = await Role.find({ name: 'admin' })

    if (!user) {
      // Create a new admin user
      await User.create({
        name: 'admin',
        email: 'admin@apitest',
        password: await bcrypt.hash('admin', 10),
        roles: [role[0]._id],
      })
      console.log('Admin created!')
    }
  } catch (error) {
    console.error(error)
  }
}
