import express, {Express} from 'express'
import { PORT } from './schema/secrets'
import rootRoutes from './routes/root'
import { PrismaClient } from '@prisma/client'
import { errorMiddleware } from './middlewares/errors'

const app:Express = express()

app.use(express.json())

app.use('/api',rootRoutes)

export const prismaClient = new PrismaClient({

    log:['query']
})

app.use(errorMiddleware)

app.listen(PORT, ()=> {console.log('App Working',PORT)})