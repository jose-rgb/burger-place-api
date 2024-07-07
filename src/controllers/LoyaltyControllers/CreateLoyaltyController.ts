import { FastifyRequest, FastifyReply } from "fastify";
import { CreateLoyaltyService } from "../../services/LoyaltyServices/CreateLoyaltyService";

interface CreateLoyaltyProps {
    accumulated_points: number,
    userId: string
}

class CreateLoyaltyController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { accumulated_points, userId } = request.body as CreateLoyaltyProps;

        const loyaltyService = new CreateLoyaltyService()
        const loyalty = await loyaltyService.execute({accumulated_points, userId})

        reply.send(loyalty)
    }
}

export { CreateLoyaltyController }