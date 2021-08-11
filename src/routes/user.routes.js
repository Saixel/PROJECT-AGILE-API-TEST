import { Router } from 'express'
const router = Router()

import * as userCtrl from '../controllers/user.controller'
import { authJWT, verifySignup } from '../middlewares'

router.post('/', authJWT.verifyToken, authJWT.isAdmin, verifySignup.checkRolesExisted, userCtrl.createUser)

export default router
