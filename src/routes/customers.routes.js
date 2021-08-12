import { Router } from 'express'
const router = Router()

const { check } = require('express-validator')

import * as customersCtrl from '../controllers/customers.controller'
import { authJWT } from '../middlewares'

router.post(
  '/',
  check('name', 'Password field is empty').not().isEmpty(),
  check('surname', 'Surname field is empty').not().isEmpty(),
  check('photo', 'Photo url is necesary').not().isEmpty(),
  authJWT.verifyToken,
  customersCtrl.createCustomer
)

router.get('/', authJWT.verifyToken, customersCtrl.getCustomers)

router.get(
  '/:customerId',
  check('customerId', 'The id is not correct').isMongoId(),
  authJWT.verifyToken,
  customersCtrl.getCustomerById
)

router.get(
  '/creator/:creatorId',
  check('creatorId', 'The id is not correct').isMongoId(),
  authJWT.verifyToken,
  customersCtrl.getCustomersByCreator
)

router.get(
  '/updater/:updaterId',
  check('updaterId', 'The id is not correct').isMongoId(),
  authJWT.verifyToken,
  customersCtrl.getCustomersByUpdater
)

router.put(
  '/:customerId',
  check('customerId', 'The id is not correct').isMongoId(),
  authJWT.verifyToken,
  customersCtrl.updateCustomer
)

router.delete(
  '/:customerId',
  check('customerId', 'The id is not correct').isMongoId(),
  authJWT.verifyToken,
  customersCtrl.deleteCustomer
)

export default router
