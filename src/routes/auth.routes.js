import { Router } from 'express'
const router = Router()

const { check } = require('express-validator')

import * as authCtrl from '../controllers/auth.controller'
import { checkSignup, validateBody } from '../middlewares'

router.post(
  '/login',
  check('email', 'Email is not valid').isEmail(),
  check('password', 'Password is empty').not().isEmpty(),
  validateBody,
  authCtrl.login
)

export default router
