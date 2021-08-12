import { Router } from 'express'
const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import { verifySignup } from '../middlewares'

router.post(
  '/signup',
  verifySignup.checkDuplicateEmail,
  verifySignup.checkRolesExisted,
  authCtrl.signUp
)

router.post('/signin', authCtrl.login)

export default router
