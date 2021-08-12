import { Router } from 'express'
const router = Router()

import * as userCtrl from '../controllers/user.controller'
import { authJWT, verifySignup } from '../middlewares'

router.post(
  '/',
  authJWT.verifyToken,
  authJWT.isAdmin,
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
