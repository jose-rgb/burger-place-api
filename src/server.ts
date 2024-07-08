import Fastify from "fastify";
import cors from "@fastify/cors";
import { userRoutes } from "./routes/userRoutes";
import { productRoutes } from "./routes/productRoutes";
import { orderRoutes } from "./routes/orderRoutes";
import { loyaltyRoutes } from "./routes/loyaltyRoutes";

const app = Fastify({logger: true})

app.setErrorHandler((error, request, reply)=>{
    reply.code(400).send({message: error.message})
})

const start = async () => {
    await app.register(cors);
    await app.register(userRoutes);
    await app.register(productRoutes);
    await app.register(orderRoutes);
    await app.register(loyaltyRoutes);

    try {
        await app.listen({port: 3333})
    } catch (error) {
        process.exit(1)
    }
}

start();