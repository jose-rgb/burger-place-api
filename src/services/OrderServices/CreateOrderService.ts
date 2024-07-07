import prismaClient from "../../prisma";

interface CreateOrderProps {
    address: string;
    amount: number;
    total: number;
    userId: string;
    productIDs: [];
}

class CreateOrderService {
    async execute({address, amount, total, userId, productIDs}: CreateOrderProps) {
        if(!address || !amount || !total || !userId || !productIDs) {
            throw new Error("Pedido inválido!")
        }

        const order = await prismaClient.order.create({
            data: {
                address,
                amount,
                total,
                userId,
                productIDs
            }
        })

        return order;
    }
}

export { CreateOrderService }