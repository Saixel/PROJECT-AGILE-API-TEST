import { Router } from 'express'
const router = Router()

import * as customersCtrl from '../controllers/customers.controller'
import { authJWT } from '../middlewares'

router.post('/', customersCtrl.createCustomer)
router.get('/', authJWT.verifyToken, customersCtrl.getCustomers)
router.get('/:customerId', authJWT.verifyToken, authJWT.isAdmin, customersCtrl.getCustomerById)
router.put('/:customerId', customersCtrl.updateCustomerById)
router.delete('/:customerId', customersCtrl.deleteCustomerById)

export default router
