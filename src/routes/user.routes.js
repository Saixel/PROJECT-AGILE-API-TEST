import { Router } from 'express'
const router = Router()

const { check } = require('express-validator')

import * as userCtrl from '../controllers/user.controller'
import { authJWT, verifySignup, validateBody } from '../middlewares'

router.post(
  '/',
  authJWT.verifyToken,
  authJWT.isAdmin,
  verifySignup.checkDuplicateEmail,
  verifySignup.checkRolesExisted,
  userCtrl.createUser
)

router.get('/', authJWT.verifyToken, authJWT.isAdmin, userCtrl.getUsers)

router.get(
  '/:userId',
  authJWT.verifyToken,
  authJWT.isAdmin,
  userCtrl.getUserById
)

router.put(
  '/:userId',
  check('userId', 'mensaje de error').isMongoId(),
  validateBody,
  authJWT.verifyToken,
  authJWT.isAdmin,
  userCtrl.updateUser
)

router.put(
  '/:userId/status',
  authJWT.verifyToken,
  authJWT.isAdmin,
  userCtrl.updateUserRole
)

router.delete(
  '/:userId',
  authJWT.verifyToken,
  authJWT.isAdmin,
  userCtrl.deleteUser
)

export default router
