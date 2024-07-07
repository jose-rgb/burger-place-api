import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteLoyaltyService } from "../../services/LoyaltyServices/DeleteLoyaltyService";

class DeleteLoyaltyController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        const loyaltyService =  new DeleteLoyaltyService();

        const loyalty =  await loyaltyService.execute({ id })

        reply.send(loyalty);
    }
}

export { DeleteLoyaltyController }