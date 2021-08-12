import { Router } from 'express'
const router = Router()

import * as customersCtrl from '../controllers/customers.controller'
import { authJWT } from '../middlewares'

router.post('/', authJWT.verifyToken, customersCtrl.createCustomer)

router.get('/', authJWT.verifyToken, customersCtrl.getCustomers)

router.get('/:customerId', authJWT.verifyToken, customersCtrl.getCustomerById)

router.get(
  '/creator/:creatorId',
  authJWT.verifyToken,
  customersCtrl.getCustomersByCreator
)

router.get(
  '/updater/:updaterId',
  authJWT.verifyToken,
  customersCtrl.getCustomersByUpdater
)

router.put('/:customerId', authJWT.verifyToken, customersCtrl.updateCustomer)

router.delete('/:customerId', authJWT.verifyToken, customersCtrl.deleteCustomer)

export default router
