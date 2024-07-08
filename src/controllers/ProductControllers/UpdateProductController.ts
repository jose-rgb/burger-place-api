import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateProductService } from "../../services/ProductServices/UpdateProductService";

interface UpdateProductProps {
    id: string;    
    name: string;
    type: string;
    image: string;
    description: string;
    price: number;
}

class UpdateProductController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {id, name, type, image, description, price} = request.body as UpdateProductProps;

        const productService = new UpdateProductService()
        const product = await productService.execute({id, name, type, image, description, price});

        reply.send(product)
    }
}

export { UpdateProductController }