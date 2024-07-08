import prismaClient from "../../prisma";

interface UpdateLoyaltyProps {
    id: string;
    accumulated_points: number;
    userId: string;
}

class UpdateLoyaltyService {
    async execute({id, accumulated_points, userId}: UpdateLoyaltyProps) {
        if(!id || !accumulated_points || !userId) {
            throw new Error("Solicitação invalida!")
        }

        const loyalty = await prismaClient.loyalty.findFirst({
            where: {
                id: id
            }
        })

        if(!loyalty) {
            throw new Error("Fidelidade não existe!")
        }

        await prismaClient.loyalty.update({
            where: {
              id: loyalty.id,
            },
            data: {
                accumulated_points: accumulated_points
            },
        })

        return { message: "Atualizado com sucesso!"}
    }
}

export { UpdateLoyaltyService}