import prismaClient from "../../prisma"

class ListProductsService {
    async execute() {
        const procuts = await prismaClient.product.findMany();

        return procuts;
    }
}

export { ListProductsService }