import prismaClient from "../../prisma";

interface UpdateUserProps {
    id: string;
    name: string;
    password: string;
    phone_number: string;
}

class UpdateUserService {
    async execute({id, name, password, phone_number}: UpdateUserProps) {
        if(!id || !name || !password || !phone_number) {
            throw new Error("Solicitação invalida!")
        }

        const checkNumberExists = await prismaClient.user.findFirst({
            where: {
                phone_number: phone_number
            }
        })

        if(checkNumberExists) {
            throw new Error("Número já cadastrado!")
        }

        const findUser = await prismaClient.user.findFirst({
            where: {
                id: id
            }
        })

        if(!findUser) {
            throw new Error("Usuário não existe!")
        }

        await prismaClient.user.update({
            where: {
              id: findUser.id,
            },
            data: {
                name: name, 
                password: password,
                phone_number: phone_number,
            },
        })

        return { message: "Atualizado com sucesso!"}
    }
}

export { UpdateUserService }