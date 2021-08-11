import { Router } from 'express'
const router = Router()

import * as customersCtrl from '../controllers/customers.controller'

router.post('/', customersCtrl.createCustomer)
router.get('/', customersCtrl.getCustomers)
router.get('/:customerId', customersCtrl.getCustomerById)
router.put('/:customerId', customersCtrl.updateCustomerById)
router.delete('/:customerId', customersCtrl.deleteCustomerById)

export default router
