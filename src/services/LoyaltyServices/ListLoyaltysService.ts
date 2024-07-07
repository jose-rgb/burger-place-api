import prismaClient from "../../prisma"

class ListLoyaltysService {
    async execute() {
        const loyalts = await prismaClient.loyalty.findMany();

        return loyalts;
    }
}

export { ListLoyaltysService }