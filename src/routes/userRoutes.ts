import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateUserController } from "../controllers/UserControllers/CreateUserController";
import { ListUsersController } from "../controllers/UserControllers/ListUsersController";
import { DeleteUserController } from "../controllers/UserControllers/DeleteUserController";
import { UpdateUserController } from "../controllers/UserControllers/UpdateUserController";

export async function userRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    })

    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersController().handle(request, reply);
    })

    fastify.delete("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply);
    })

    fastify.put("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateUserController().handle(request, reply);
    })
}