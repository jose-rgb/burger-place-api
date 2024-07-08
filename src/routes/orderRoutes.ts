import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateOrderController } from "../controllers/OrderControllers/CreateOrderController";
import { ListOrdersController } from "../controllers/OrderControllers/ListOrdersController";
import { DeleteOrderController } from "../controllers/OrderControllers/DeleteOrderController";

export async function orderRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
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
