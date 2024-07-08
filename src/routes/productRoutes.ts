import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateProductController } from "../controllers/ProductControllers/CreateProductController";
import { ListProductsController } from "../controllers/ProductControllers/ListProductsController";
import { DeleteProductController } from "../controllers/ProductControllers/DeleteProductController";
import { UpdateProductController } from "../controllers/ProductControllers/UpdateProductController";

export async function productRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().handle(request, reply);
    })

    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductsController().handle(request, reply);
    })

    fastify.delete("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().handle(request, reply);
    })

    fastify.put("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateProductController().handle(request, reply);
    })
}
