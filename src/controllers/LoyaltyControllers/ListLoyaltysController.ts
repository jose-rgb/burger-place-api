import { FastifyRequest, FastifyReply } from "fastify";
import { ListLoyaltysService } from "../../services/LoyaltyServices/ListLoyaltysService";

class ListLoyaltysController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listLoyaltyssService = new ListLoyaltysService();

        const loyaltys = await listLoyaltyssService.execute();

        reply.send(loyaltys);
    }
}

export { ListLoyaltysController }