import { FastifyRequest, FastifyReply } from "fastify";
import { CreateOrderService } from "../../services/OrderServices/CreateOrderService";

interface CreateOrderProps {
    address: string;
    amount: number;
    total: number;
    userId: string;
    productIDs: [];
}

class CreateOrderController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { address, amount, total, userId, productIDs } = request.body as CreateOrderProps;

        const orderService = new CreateOrderService()
        const order = await orderService.execute({address, amount, total, userId, productIDs})

        reply.send(order)
    }
}

export { CreateOrderController }