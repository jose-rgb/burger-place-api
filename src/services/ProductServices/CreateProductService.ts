import prismaClient from "../../prisma";

interface CreateProductProps {
    name: string;
    type: string;
    image: string
    description: string;
    price: number;
}

class CreateProductService {
    async execute({name, type, image, description, price}: CreateProductProps) {
        if(!name || !type || !image || !description || !price) {
            throw new Error("Preencha todos os campos!")
        }

        const product = await prismaClient.product.create({
            data: {
                name,
                type,
                image,
                description,
                price
            }
        })

        return product;
    }
}

export { CreateProductService }