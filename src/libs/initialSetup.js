import Role from '../models/role.model'

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
