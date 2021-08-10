import { Router } from 'express'
const router = Router()

import * as customersCtrl from '../controllers/customers.controller'

router.post('/', customersCtrl.createProduct)
router.get('/', customersCtrl.getProducts)
router.get('/:customerId', customersCtrl.getProductById)
router.put('/:customerId', customersCtrl.updateProductById)
router.delete('/:customerId', customersCtrl.deleteProductById)

export default router
