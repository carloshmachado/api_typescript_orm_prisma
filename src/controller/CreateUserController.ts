import { Request, Response } from 'express'
import { User } from '../PrismaDB/modelUser/user'

class CreateUserController {
    public async createUser(req: Request, res: Response): Promise<Response> {

        const name = req.body.name as string
        const age = Number(req.body.age) as number

        const result = await User.createUser(name, age)

        return res.status(200).json({ message: result })
    }
}

export default new CreateUserController()