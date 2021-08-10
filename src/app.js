import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
// import helmet from 'helmet'

import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'
import customersRoutes from './routes/customers.routes'

const app = express()

app.use(cors())
// app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/auth', authRoutes)

app.use('/api/users', usersRoutes)
app.use('/api/customers', customersRoutes)

export default app
