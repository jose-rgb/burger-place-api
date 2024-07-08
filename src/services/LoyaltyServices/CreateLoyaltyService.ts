import prismaClient from "../../prisma";

interface CreateLoyaltyProps {
    accumulated_points: number,
    userId: string
}

class CreateLoyaltyService {
    async execute({accumulated_points, userId}: CreateLoyaltyProps) {
        if(!accumulated_points || ! userId) {
            throw new Error("Cumpom fidelidade inválido!")
        }

        const checkLoyaltyExists = await prismaClient.loyalty.findFirst({
            where: {
                userId: userId,
            }
        })

        if(checkLoyaltyExists) {
            throw new Error("Fidelidade já cadastrada!")
        }

        const loyalty = await prismaClient.loyalty.create({
            data: {
                accumulated_points,
                userId
            }
        })

        return loyalty;
    }
}

export { CreateLoyaltyService }