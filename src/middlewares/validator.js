const { validationResult } = require('express-validator')

export const validateBody = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json(errors)

  next()
}
