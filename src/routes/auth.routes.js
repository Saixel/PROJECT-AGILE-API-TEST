import { Router } from 'express'
const router = Router()

const { check } = require('express-validator')

import * as authCtrl from '../controllers/auth.controller'
import { verifySignup, validateBody, validateLogin } from '../middlewares'

router.post(
  '/signup',
  verifySignup.checkDuplicateEmail,
  verifySignup.checkRolesExisted,
  authCtrl.signUp
)

router.post(
  '/login',
  check('email', 'mensaje de error').isEmail(),
  validateBody,
  authCtrl.login
)

export default router
