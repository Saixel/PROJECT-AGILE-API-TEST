import Customer from '../models/customer.model'

export const createCustomer = async (req, res) => {
  const { name, surname, photoUrl } = req.body
  const newCustomer = new Customer({ name, surname, photoUrl })
  const customerSaved = await newCustomer.save()
  res.status(201).json(customerSaved)
}

export const getCustomers = async (req, res) => {
  const customers = await Customer.find()
  res.status(200).json(customers)
}

export const getCustomerById = async (req, res) => {
  const { customerId } = req.params
  const customer = await Customer.findById(customerId)
  res.status(200).json(customer)
}

export const updateCustomerById = async (req, res) => {
  const { customerId } = req.params
  const updatedCustomer = await Customer.findByIdAndUpdate(
    customerId,
    req.body,
    { new: true }
  )
  res.status(200).json(updatedCustomer)
}

export const deleteCustomerById = async (req, res) => {
  const { customerId } = req.params
  await Customer.findByIdAndDelete(customerId)
  res.status(204).json()
}
