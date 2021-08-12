import Customer from '../models/customer.model'

export const createCustomer = async (req, res) => {
  try {
    const { name, surname, photoUrl } = req.body
    const newCustomer = new Customer({ name, surname, photoUrl })
    newCustomer.createdBy = req.userId
    const customerSaved = await newCustomer.save()
    res.status(201).json(customerSaved)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getCustomers = async (req, res) => {
  try {
    const { page, perPage } = req.query
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 10,
    }
    const customers = await Customer.paginate({}, options)
    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getCustomerById = async (req, res) => {
  try {
    const { customerId } = req.params
    const customer = await Customer.findById(customerId)
    res.status(200).json(customer)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateCustomer = async (req, res) => {
  try {
    const { customerId } = req.params
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      req.body,
      { new: true }
    )
    updatedCustomer.updatedBy = req.userId
    res.status(200).json(updatedCustomer)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteCustomer = async (req, res) => {
  try {
    const { customerId } = req.params
    await Customer.findByIdAndDelete(customerId)
    res.status(204).json()
  } catch (error) {
    res.status(500).json(error)
  }
}
