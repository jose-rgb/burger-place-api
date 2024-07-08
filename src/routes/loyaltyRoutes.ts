import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateLoyaltyController } from "../controllers/LoyaltyControllers/CreateLoyaltyController";
import { ListLoyaltysController } from "../controllers/LoyaltyControllers/ListLoyaltysController";
import { DeleteLoyaltyController } from "../controllers/LoyaltyControllers/DeleteLoyaltyController";
import { UpdateLoyaltyController } from "../controllers/LoyaltyControllers/UpdateLoyaltyController";

export async function loyaltyRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/loyalty", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateLoyaltyController().handle(request, reply);
    })    

    fastify.get("/loyaltys", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListLoyaltysController().handle(request, reply);
    })

    fastify.delete("/loyalty", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteLoyaltyController().handle(request, reply);
    })

    fastify.put("/loyalty", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateLoyaltyController().handle(request, reply);
    })
}
