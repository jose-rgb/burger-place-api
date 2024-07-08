import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateLoyaltyService } from "../../services/LoyaltyServices/UpdateLoyaltyService";

class UpdateLoyaltyController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, accumulated_points, userId } = request.body as {id: string, accumulated_points: number, userId: string};

        const loyaltyService = new UpdateLoyaltyService()
        const user = await loyaltyService.execute({ id, accumulated_points, userId});

        reply.send(user)
    }
}

export { UpdateLoyaltyController }