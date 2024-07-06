import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/UserServices/CreateUserService";

class CreateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, password, phone_number  } = request.body as { name: string, password: string, phone_number: string};

        const userService = new CreateUserService()
        const user = await userService.execute({name, password, phone_number});

        reply.send(user)
    }
}

export { CreateUserController }