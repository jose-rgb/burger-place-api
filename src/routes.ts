import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateUserController } from "./controllers/UserControllers/CreateUserController";
import { ListUsersController } from "./controllers/UserControllers/ListUsersController";
import { DeleteUserController } from "./controllers/UserControllers/DeleteUserController";

import { CreateProductController } from "./controllers/ProductControllers/CreateProductController";
import { ListProductsController } from "./controllers/ProductControllers/ListProductsController";
import { DeleteProductController } from "./controllers/ProductControllers/DeleteProductController";

import { CreateOrderController } from "./controllers/OrderControllers/CreateOrderController";
import { ListOrdersController } from "./controllers/OrderControllers/ListOrdersController";
import { DeleteOrderController } from "./controllers/OrderControllers/DeleteOrderController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    })

    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersController().handle(request, reply);
    })

    fastify.delete("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply);
    })


    fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().handle(request, reply);
    })

    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductsController().handle(request, reply);
    })

    fastify.delete("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().handle(request, reply);
    })


    fastify.post("/order", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateOrderController().handle(request, reply);
    })

    fastify.get("/orders", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListOrdersController().handle(request, reply);
    })

    fastify.delete("/order", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteOrderController().handle(request, reply);
    })
}