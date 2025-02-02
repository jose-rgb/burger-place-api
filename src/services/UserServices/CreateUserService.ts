import prismaClient from "../../prisma";

interface CreateUserProps {
    name: string;
    password: string;
    phone_number: string;
}

class CreateUserService {
    async execute({name, password, phone_number}: CreateUserProps) {

        if(!name || !password || !phone_number) {
            throw new Error("Preencha todos os campos!")
        }

        const checkUserExists = await prismaClient.user.findFirst({
            where: {
                phone_number: phone_number
            }
        })

        if(checkUserExists) {
            throw new Error("Número já cadastrado!")
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                password,
                phone_number
            }
        })

        return user;
    }
}

export { CreateUserService }