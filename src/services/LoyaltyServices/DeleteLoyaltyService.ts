import prismaClient from "../../prisma";

interface DeleteLoyaltyProps {
    id: string;
}

class DeleteLoyaltyService {
    async execute({id}: DeleteLoyaltyProps) {
        if(!id) {
            throw new Error("Solicitação invalida!")
        }

        const findLoyalty = await prismaClient.loyalty.findFirst({
            where: {
                id: id
            }
        })

        if(!findLoyalty) {
            throw new Error("fidelidade não existe!")
        }

        await prismaClient.loyalty.delete({
            where: {
                id: findLoyalty.id
            }
        })

        return { message: "fidelidade deletada com sucesso!"}
    }
}

export { DeleteLoyaltyService }