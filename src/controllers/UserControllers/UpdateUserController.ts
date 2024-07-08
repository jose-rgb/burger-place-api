import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserService } from "../../services/UserServices/UpdateUserService";

class UpdateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {id, name, password, phone_number  } = request.body as {id: string, name: string, password: string, phone_number: string};

        const userService = new UpdateUserService()
        const user = await userService.execute({id, name, password, phone_number});

        reply.send(user)
    }
}

export { UpdateUserController }