import { Router } from 'express'
import CreateUserController from './controller/CreateUserController'

const routes = Router()

routes.post('/v1/createuser', CreateUserController.createUser)

export default routes