import prismaClient from "../../prisma";

interface UpdateProductProps {
    id: string;    
    name: string;
    type: string;
    image: string;
    description: string;
    price: number;
}

class UpdateProductService {
    async execute({id, name, type, image, description, price}: UpdateProductProps) {
        if(!id || !name || !type|| !image || !description || !price) {
            throw new Error("Solicitação invalida!")
        }

        const findProduct = await prismaClient.product.findFirst({
            where: {
                id: id
            }
        })

        if(!findProduct) {
            throw new Error("Produto não existe!")
        }

        await prismaClient.product.update({
            where: {
              id: findProduct.id,
            },
            data: {
                name: name,
                type: type,
                image: image,
                description: description,
                price: price
            },
        })

        return { message: "Atualizado com sucesso!"}
    }
}

export {UpdateProductService }