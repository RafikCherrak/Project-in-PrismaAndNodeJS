import {Router} from 'express'
import { login, signup } from '../controllers/authControllers'

const authRoutes:Router = Router()


authRoutes.post('/login',login)
authRoutes.post('/signup',signup)


export default authRoutes