import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductService } from "../../services/ProductServices/CreateProductService";

interface CreateProductProps {
    name: string;
    type: string;
    image: string
    description: string;
    price: number;
}

class CreateProductController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, type, image, description, price } = request.body as CreateProductProps;

        const productService = new CreateProductService()
        const product = await productService.execute({ name, type, image, description, price });

        reply.send(product)
    }
}

export { CreateProductController }