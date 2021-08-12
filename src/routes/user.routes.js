import { Router } from 'express'
const router = Router()

const { check } = require('express-validator')

import * as userCtrl from '../controllers/user.controller'
import { authJWT, checkSignup, validateBody } from '../middlewares'

router.post(
  '/',
  check('email', 'Email is not valid').isEmail(),
  check('password', 'Password is empty').not().isEmpty(),
  authJWT.verifyToken,
  authJWT.isAdmin,
  checkSignup.checkDuplicateEmail,
  checkSignup.checkValidRoles,
  userCtrl.createUser
)

router.get('/', authJWT.verifyToken, authJWT.isAdmin, userCtrl.getUsers)

router.get(
  '/:userId',
  check('userId', 'The id is not correct').isMongoId(),
  authJWT.verifyToken,
  authJWT.isAdmin,
  userCtrl.getUserById
)

router.put(
  '/:userId',
  check('userId', 'The id is not correct').isMongoId(),
  validateBody,
  authJWT.verifyToken,
  authJWT.isAdmin,
  userCtrl.updateUser
)

router.put(
  '/:userId/status',
  check('userId', 'The id is not correct').isMongoId(),
  authJWT.verifyToken,
  authJWT.isAdmin,
  userCtrl.updateUserRole
)

router.delete(
  '/:userId',
  check('userId', 'The id is not correct').isMongoId(),
  authJWT.verifyToken,
  authJWT.isAdmin,
  userCtrl.deleteUser
)

export default router
